package com.example.Javap;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

/**
 * Pure game logic separated from any UI (no Swing/AWT usage).
 * This class manages the card deck, matching logic and simple game state.
 */
public class GameEngine {

    public static class ModelCard {
        public final String name; // e.g. "syntax1" or "head1"
        public boolean matched;

        public ModelCard(String name) {
            this.name = name;
            this.matched = false;
        }
    }

    public enum SelectResult {
        FIRST_SELECTED, // waiting for second
        MATCH, // two selected and they match
        MISMATCH, // two selected and they don't match
        ALREADY_MATCHED, // selected a card that's already matched
        INVALID, // invalid index
        WIN // after a match, the game is won
    }

    private final int rows;
    private final int columns;
    private final List<ModelCard> board;
    private int firstIndex = -1;
    private int secondIndex = -1;
    private int errorCount = 0;
    private int remainingTime = 60;

    public GameEngine() {
        this(4, 5);
    }

    public GameEngine(int rows, int columns) {
        this.rows = rows;
        this.columns = columns;
        this.board = new ArrayList<>();
        initBoard();
    }

    // Create the default 10 pairs: syntax1..syntax10 and head1..head10
    public final void initBoard() {
        board.clear();
        int pairs = (rows * columns) / 2;
        for (int i = 1; i <= pairs; i++) {
            board.add(new ModelCard("syntax" + i));
            board.add(new ModelCard("head" + i));
        }
        errorCount = 0;
        remainingTime = 60;
        firstIndex = -1;
        secondIndex = -1;
    }

    public void shuffle() {
        Collections.shuffle(board);
    }

    public int size() {
        return board.size();
    }

    public String getCardNameAt(int index) {
        if (index < 0 || index >= board.size()) return null;
        return board.get(index).name;
    }

    public boolean isMatched(int index) {
        if (index < 0 || index >= board.size()) return false;
        return board.get(index).matched;
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

    public void reset() {
        initBoard();
        shuffle();
    }

    // Select a card at index. Handles first and second selection logic.
    // Caller is responsible for UI timing and showing/hiding images.
    public SelectResult select(int index) {
        if (index < 0 || index >= board.size()) return SelectResult.INVALID;
        ModelCard card = board.get(index);
        if (card.matched) return SelectResult.ALREADY_MATCHED;

        if (firstIndex == -1) {
            firstIndex = index;
            return SelectResult.FIRST_SELECTED;
        }

        if (firstIndex != -1 && secondIndex == -1 && index != firstIndex) {
            secondIndex = index;
            // determine match
            ModelCard c1 = board.get(firstIndex);
            ModelCard c2 = board.get(secondIndex);
            boolean isSyntax1 = c1.name.startsWith("syntax");
            boolean isSyntax2 = c2.name.startsWith("syntax");

            // If both from same set (both syntax or both head) it's incorrect selection
            if (isSyntax1 == isSyntax2) {
                errorCount++;
                // leave them un-matched; caller should flip back
                // reset selections
                firstIndex = -1;
                secondIndex = -1;
                return SelectResult.MISMATCH;
            }

            // check numeric equality
            String n1 = isSyntax1 ? c1.name.replace("syntax", "") : c1.name.replace("head", "");
            String n2 = isSyntax2 ? c2.name.replace("syntax", "") : c2.name.replace("head", "");

            if (n1.equals(n2)) {
                // matched pair
                c1.matched = true;
                c2.matched = true;
                firstIndex = -1;
                secondIndex = -1;
                if (allMatched()) return SelectResult.WIN;
                return SelectResult.MATCH;
            } else {
                errorCount++;
                firstIndex = -1;
                secondIndex = -1;
                return SelectResult.MISMATCH;
            }
        }

        // default
        return SelectResult.INVALID;
    }

    public boolean allMatched() {
        for (ModelCard c : board) if (!c.matched) return false;
        return true;
    }
}
