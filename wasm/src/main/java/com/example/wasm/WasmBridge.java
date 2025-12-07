package com.example.wasm;

/**
 * Small adapter class exposing a C-style API that the generated JS/WASM glue
 * can call. Methods use primitive types for easier interop.
 */
public class WasmBridge {

    private static GameEngine engine = null;

    // initialize engine and shuffle
    public static void init() {
        engine = new GameEngine();
        engine.shuffle();
    }

    // return board size
    public static int boardSize() {
        if (engine == null) return 0;
        return engine.size();
    }

    // get the card ID at index (pair number 1,2,3...)
    public static int getCardId(int index) {
        if (engine == null) return -1;
        return engine.getCardId(index);
    }

    // get the card type at index (0=syntax, 1=head)
    public static int getCardType(int index) {
        if (engine == null) return -1;
        return engine.getCardType(index);
    }

    // check if card is matched (returns 1=true, 0=false)
    public static int isMatched(int index) {
        if (engine == null) return 0;
        if (engine.isMatched(index)) return 1;
        return 0;
    }

    // perform a selection; return codes: -1 invalid, -2 already matched, 1 first selected, 0 mismatch, 2 match, 3 win
    public static int selectCard(int index) {
        if (engine == null) init();
        return engine.select(index);
    }

    public static int getErrorCount() {
        if (engine == null) return 0;
        return engine.getErrorCount();
    }

    public static int getRemainingTime() {
        if (engine == null) return 0;
        return engine.getRemainingTime();
    }

    public static int getFirstIndex() {
        if (engine == null) return -1;
        return engine.getFirstIndex();
    }

    public static int getSecondIndex() {
        if (engine == null) return -1;
        return engine.getSecondIndex();
    }
    
    /**
     * Minimal entrypoint required by Bytecoder when a mainClass is configured.
     * We call all methods so Bytecoder traces and includes them in output.
     */
    public static void main(String[] args) {
        init();
        
        // Call all methods so Bytecoder includes them
        int size = boardSize();
        if (size > 0) {
            int id = getCardId(0);
            int type = getCardType(0);
            int m = isMatched(0);
            int result = selectCard(0);
            int errors = getErrorCount();
            int time = getRemainingTime();
            int first = getFirstIndex();
            int second = getSecondIndex();
        }
    }
}
