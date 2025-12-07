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
}
