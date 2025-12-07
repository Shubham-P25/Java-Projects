package com.example.wasm;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

/**
 * Copy of the pure GameEngine adapted for the WASM POC.
 * Kept intentionally simple and independent so Bytecoder can compile it.
 */
public class GameEngine {
    public static class ModelCard {
        public final String name;
        public boolean matched;

        public ModelCard(String name) {
            this.name = name;
            this.matched = false;
        }
    }

    private final int rows;
    private final int columns;
    private final List<ModelCard> board = new ArrayList<>();
    private int firstIndex = -1;
    private int secondIndex = -1;
    private int errorCount = 0;
    private int remainingTime = 60;

    public GameEngine() { this(4,5); }
    public GameEngine(int rows, int columns) {
        this.rows = rows; this.columns = columns; initBoard();
    }

    public void initBoard() {
        board.clear();
        int pairs = (rows * columns) / 2;
        for (int i = 1; i <= pairs; i++) {
            board.add(new ModelCard("syntax" + i));
            board.add(new ModelCard("head" + i));
        }
        errorCount = 0; remainingTime = 60; firstIndex = -1; secondIndex = -1;
    }

    public void shuffle() { Collections.shuffle(board); }

    public int size() { return board.size(); }
    public String getCardNameAt(int i) { return board.get(i).name; }
    public int getErrorCount() { return errorCount; }
    public int getRemainingTime() { return remainingTime; }
    public void setRemainingTime(int t) { remainingTime = t; }

    public int select(int index) {
        if (index < 0 || index >= board.size()) return -1;
        ModelCard c = board.get(index);
        if (c.matched) return -2;
        if (firstIndex == -1) { firstIndex = index; return 1; }
        if (firstIndex != -1 && secondIndex == -1 && index != firstIndex) {
            secondIndex = index;
            ModelCard c1 = board.get(firstIndex);
            ModelCard c2 = board.get(secondIndex);
            boolean s1 = c1.name.startsWith("syntax");
            boolean s2 = c2.name.startsWith("syntax");
            if (s1 == s2) { errorCount++; firstIndex = -1; secondIndex = -1; return 0; }
            String n1 = s1 ? c1.name.replace("syntax","") : c1.name.replace("head","");
            String n2 = s2 ? c2.name.replace("syntax","") : c2.name.replace("head","");
            if (n1.equals(n2)) { c1.matched = true; c2.matched = true; firstIndex = -1; secondIndex = -1; return allMatched() ? 3 : 2; }
            errorCount++; firstIndex = -1; secondIndex = -1; return 0;
        }
        return -1;
    }

    public boolean allMatched() { for (ModelCard m : board) if (!m.matched) return false; return true; }
}
