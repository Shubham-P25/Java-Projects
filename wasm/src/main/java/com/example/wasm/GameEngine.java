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
        boardSize = rows * columns;
        cardIds = new int[boardSize];
        cardTypes = new int[boardSize];
        matched = new boolean[boardSize];
        
        int pairs = boardSize / 2;
        int idx = 0;
        for (int i = 1; i <= pairs; i++) {
            cardIds[idx] = i;
            cardTypes[idx] = 0; // syntax
            matched[idx] = false;
            idx++;
            
            cardIds[idx] = i;
            cardTypes[idx] = 1; // head
            matched[idx] = false;
            idx++;
        }
        
        errorCount = 0;
        remainingTime = 60;
        firstIndex = -1;
        secondIndex = -1;
    }

    public void shuffle() {
        // Simple Fisher-Yates shuffle using basic math
        for (int i = boardSize - 1; i > 0; i--) {
            int j = (int)(Math.random() * (i + 1));
            // Swap cardIds
            int tmpId = cardIds[i];
            cardIds[i] = cardIds[j];
            cardIds[j] = tmpId;
            // Swap cardTypes
            int tmpType = cardTypes[i];
            cardTypes[i] = cardTypes[j];
            cardTypes[j] = tmpType;
        }
    }

    public int size() {
        return boardSize;
    }

    public int getCardId(int index) {
        if (index < 0 || index >= boardSize) return -1;
        return cardIds[index];
    }

    public int getCardType(int index) {
        if (index < 0 || index >= boardSize) return -1;
        return cardTypes[index];
    }

    public boolean isMatched(int index) {
        if (index < 0 || index >= boardSize) return false;
        return matched[index];
    }

    public int getErrorCount() {
        return errorCount;
    }

    public int getRemainingTime() {
        return remainingTime;
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
    public int select(int index) {
        // Validate index
        if (index < 0) return -1;
        if (index >= boardSize) return -1;
        
        // Already matched?
        if (matched[index]) return -2;
        
        // First selection
        if (firstIndex == -1) {
            firstIndex = index;
            return 1;
        }
        
        // Same card clicked twice
        if (index == firstIndex) return -1;
        
        // Second selection
        secondIndex = index;
        
        // Check if same type (both syntax or both head) - no match possible
        if (cardTypes[firstIndex] == cardTypes[secondIndex]) {
            errorCount++;
            firstIndex = -1;
            secondIndex = -1;
            return 0;
        }
        
        // Check if same pair ID
        if (cardIds[firstIndex] == cardIds[secondIndex]) {
            matched[firstIndex] = true;
            matched[secondIndex] = true;
            firstIndex = -1;
            secondIndex = -1;
            
            // Check if all matched
            if (checkAllMatched()) {
                return 3;
            }
            return 2;
        }
        
        // Different pair IDs - mismatch
        errorCount++;
        firstIndex = -1;
        secondIndex = -1;
        return 0;
    }

    public boolean checkAllMatched() {
        for (int i = 0; i < boardSize; i++) {
            if (!matched[i]) return false;
        }
        return true;
    }

    public int getFirstIndex() {
        return firstIndex;
    }

    public int getSecondIndex() {
        return secondIndex;
    }
}
