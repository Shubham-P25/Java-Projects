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
        return engine == null ? 0 : engine.size();
    }

    // get the name length of card at index (helper to validate)
    public static int cardNameLength(int index) {
        if (engine == null) return 0;
        String n = engine.getCardNameAt(index);
        return n == null ? 0 : n.length();
    }

    // perform a selection; return codes: -1 invalid, -2 already matched, 1 first selected, 0 mismatch, 2 match, 3 win
    public static int selectCard(int index) {
        if (engine == null) init();
        return engine.select(index);
    }

    public static int getErrorCount() { return engine == null ? 0 : engine.getErrorCount(); }
    public static int getRemainingTime() { return engine == null ? 0 : engine.getRemainingTime(); }
    
    /**
     * Minimal entrypoint required by Bytecoder when a mainClass is configured.
     * Bytecoder needs a public static void main(String[]) to start analysis.
     * We call all methods here so Bytecoder traces them and includes them
     * in the generated JS/WASM output.
     */
    public static void main(String[] args) {
        // initialize engine so analysis sees the types used
        init();
        
        // Call all methods so Bytecoder includes them in output
        // (These won't execute at runtime, just ensure they're compiled)
        if (engine != null) {
            boardSize();
            cardNameLength(0);
            selectCard(0);
            getErrorCount();
            getRemainingTime();
        }
    }
}
