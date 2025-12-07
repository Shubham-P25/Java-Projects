package com.example.wasm;

/**
 * Simplified GameEngine for Bytecoder WASM compilation.
 * Uses only arrays and primitives - no Collections, no String methods.
 */
public class GameEngine {

    // Card data stored as parallel arrays (Bytecoder-friendly)
    private int[] cardIds;      // card pair ID (1,1,2,2,3,3,...)
    private int[] cardTypes;    // 0=syntax, 1=head
    private boolean[] matched;  // whether card is matched
    
    private int boardSize;
    private int firstIndex;
    private int secondIndex;
    private int errorCount;
    private int remainingTime;

    public GameEngine() {
        init(4, 5);
    }

    public void init(int rows, int columns) {
        int sz = rows * columns;
        boardSize = sz;
        cardIds = new int[sz];
        cardTypes = new int[sz];
        matched = new boolean[sz];
        
        int pairs = sz / 2;
        int idx = 0;
        int pairNum = 1;
        while (pairNum <= pairs) {
            cardIds[idx] = pairNum;
            cardTypes[idx] = 0;
            matched[idx] = false;
            idx = idx + 1;
            
            cardIds[idx] = pairNum;
            cardTypes[idx] = 1;
            matched[idx] = false;
            idx = idx + 1;
            
            pairNum = pairNum + 1;
        }
        
        errorCount = 0;
        remainingTime = 60;
        firstIndex = -1;
        secondIndex = -1;
    }

    public void shuffle() {
        int sz = boardSize;
        int i = sz - 1;
        while (i > 0) {
            double rand = Math.random();
            int range = i + 1;
            int j = (int)(rand * range);
            
            int tmpId = cardIds[i];
            cardIds[i] = cardIds[j];
            cardIds[j] = tmpId;
            
            int tmpType = cardTypes[i];
            cardTypes[i] = cardTypes[j];
            cardTypes[j] = tmpType;
            
            i = i - 1;
        }
    }

    public int size() {
        int sz = boardSize;
        return sz;
    }

    public int getCardId(int index) {
        int sz = boardSize;
        boolean tooLow = index < 0;
        if (tooLow) {
            return -1;
        }
        boolean tooHigh = index >= sz;
        if (tooHigh) {
            return -1;
        }
        int id = cardIds[index];
        return id;
    }

    public int getCardType(int index) {
        int sz = boardSize;
        boolean tooLow = index < 0;
        if (tooLow) {
            return -1;
        }
        boolean tooHigh = index >= sz;
        if (tooHigh) {
            return -1;
        }
        int t = cardTypes[index];
        return t;
    }

    public boolean isMatched(int index) {
        int sz = boardSize;
        boolean tooLow = index < 0;
        if (tooLow) {
            return false;
        }
        boolean tooHigh = index >= sz;
        if (tooHigh) {
            return false;
        }
        boolean m = matched[index];
        return m;
    }

    public int getErrorCount() {
        int e = errorCount;
        return e;
    }

    public int getRemainingTime() {
        int t = remainingTime;
        return t;
    }

    public void setRemainingTime(int t) {
        remainingTime = t;
    }

    /**
     * Select a card. Returns:
     * -1 = invalid index
     * -2 = already matched
     *  1 = first card selected
     *  0 = mismatch (second card, no match)
     *  2 = match found
     *  3 = game won (all matched)
     */
    public int select(int idx) {
        int result = doSelect(idx);
        return result;
    }
    
    private int doSelect(int idx) {
        // Use local variables to help Bytecoder
        int sz = boardSize;
        int fi = firstIndex;
        
        // Validate index - split conditions
        boolean tooLow = idx < 0;
        if (tooLow) {
            return -1;
        }
        boolean tooHigh = idx >= sz;
        if (tooHigh) {
            return -1;
        }
        
        // Already matched?
        boolean alreadyMatched = matched[idx];
        if (alreadyMatched) {
            return -2;
        }
        
        // First selection
        boolean noFirst = fi == -1;
        if (noFirst) {
            firstIndex = idx;
            return 1;
        }
        
        // Same card clicked twice
        boolean sameCard = idx == fi;
        if (sameCard) {
            return -1;
        }
        
        // Second selection
        secondIndex = idx;
        int si = idx;
        
        // Check if same type (both syntax or both head) - no match possible
        int type1 = cardTypes[fi];
        int type2 = cardTypes[si];
        boolean sameType = type1 == type2;
        if (sameType) {
            errorCount = errorCount + 1;
            firstIndex = -1;
            secondIndex = -1;
            return 0;
        }
        
        // Check if same pair ID
        int id1 = cardIds[fi];
        int id2 = cardIds[si];
        boolean samePair = id1 == id2;
        if (samePair) {
            matched[fi] = true;
            matched[si] = true;
            firstIndex = -1;
            secondIndex = -1;
            
            // Check if all matched
            boolean allDone = checkAllMatched();
            if (allDone) {
                return 3;
            }
            return 2;
        }
        
        // Different pair IDs - mismatch
        errorCount = errorCount + 1;
        firstIndex = -1;
        secondIndex = -1;
        return 0;
    }

    public boolean checkAllMatched() {
        int sz = boardSize;
        int i = 0;
        while (i < sz) {
            boolean m = matched[i];
            if (!m) {
                return false;
            }
            i = i + 1;
        }
        return true;
    }

    public int getFirstIndex() {
        int fi = firstIndex;
        return fi;
    }

    public int getSecondIndex() {
        int si = secondIndex;
        return si;
    }
}
