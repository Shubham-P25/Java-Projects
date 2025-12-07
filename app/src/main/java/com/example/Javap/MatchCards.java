
package com.example.Javap;


import java.awt.*;
import java.awt.event.*;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;
//import java.sql.ResultSet;
import java.util.ArrayList;
import javax.swing.*;

public class MatchCards {
    
    Levelpage Level = new Levelpage();
    Mainpage main = new Mainpage();
    
    // Pure game engine (no UI) that contains the card order and matching logic
    GameEngine engine = new GameEngine();
    
    class Card {
        String cardName;
        ImageIcon cardImageIcon;
        boolean isSyntax;

        Card(String cardName, ImageIcon cardImageIcon, boolean isSyntax) {
            this.cardName = cardName;
            this.cardImageIcon = cardImageIcon;
            this.isSyntax = isSyntax;
        }

        @Override
        public String toString() {
            return cardName;
        }
    }

    int rows = 4;
    int columns = 5;
    int cardWidth = 90;
    int cardHeight = 128;
    
    ArrayList<Card> cardSet;
    ImageIcon cardBackImageIcon;

    int boardWidth = columns * cardWidth;
    int boardHeight = rows * cardHeight;

    JFrame frame = new JFrame("Memory Game - Flipping Tiles");
    JLabel textLabel = new JLabel();
    JLabel timerLabel = new JLabel();
    JPanel textPanel = new JPanel();
    JPanel boardPanel = new JPanel();
    JPanel restartGamePanel = new JPanel();
    JButton restartButton = new JButton();

    // mirror UI-visible error/time state is read from engine where possible
    int errorCount = 0;
    ArrayList<JButton> board;
    Timer hideCardTimer;
    Timer gameTimer;
    boolean gameReady = false;
    JButton card1Selected;
    JButton card2Selected;
    int remainingTime = 60;
    
    String Levelgame= "Bignner";
    String Name0 = Level.Nameuser;
    String Name = Name0;
//    

    @SuppressWarnings("OverridableMethodCallInConstructor")
    MatchCards() {
        // initialize engine and sync UI resources
        engine.reset();
        engine.shuffle();
        setupCards();

        frame.setLayout(new BorderLayout());
        frame.setSize(boardWidth, boardHeight);
        frame.setLocationRelativeTo(null);
        frame.setResizable(false);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        // Error text and timer
        textLabel.setFont(new Font("Arial", Font.PLAIN, 20));
        textLabel.setHorizontalAlignment(JLabel.CENTER);
        textLabel.setText("  Errors: " + errorCount);

        timerLabel.setFont(new Font("Arial", Font.PLAIN, 20));
        timerLabel.setHorizontalAlignment(JLabel.CENTER);
        timerLabel.setText("Time Remaining: " + remainingTime);

        textPanel.setLayout(new BoxLayout(textPanel, BoxLayout.X_AXIS));
        textPanel.add(textLabel);
        textPanel.add(Box.createHorizontalStrut(170)); // Add space between the labels
        textPanel.add(timerLabel);
        textPanel.setPreferredSize(new Dimension(boardWidth, 30));
        frame.add(textPanel, BorderLayout.NORTH);

        // Card game board
        board = new ArrayList<>();
        boardPanel.setLayout(new GridLayout(rows, columns));
        for (int i = 0; i < cardSet.size(); i++) {
            JButton tile = new JButton();
            tile.setPreferredSize(new Dimension(cardWidth, cardHeight));
            tile.setOpaque(true);
            tile.setIcon(cardBackImageIcon);
            tile.setFocusable(false);
            int cardIndex = i; // Final variable for ActionListener
            tile.addActionListener((ActionEvent e) -> {
                if (!gameReady) return;
                JButton tile1 = (JButton) e.getSource();
                if (tile1.getIcon() != cardBackImageIcon) return; // already shown
                int index = board.indexOf(tile1);
                // reveal UI image for this index
                tile1.setIcon(cardSet.get(index).cardImageIcon);
                // call engine to process selection
                GameEngine.SelectResult res = engine.select(index);
                // update errorCount from engine
                errorCount = engine.getErrorCount();
                textLabel.setText("Errors: " + errorCount);

                switch (res) {
                    case FIRST_SELECTED:
                        card1Selected = tile1;
                        break;
                    case MATCH:
                        main.playSE(2);
                        // keep both revealed; clear selection references
                        card1Selected = null;
                        card2Selected = null;
                        break;
                    case MISMATCH:
                        main.playSE(3);
                        // second selection is this tile
                        card2Selected = tile1;
                        // schedule flip back
                        hideCardTimer.restart();
                        break;
                    case WIN:
                        main.playSE(2);
                        // leave visuals as-is and show winner
                        gameTimer.stop();
                        showWinningFrame();
                        MatchCards.this.frame.dispose();
                        break;
                    default:
                        break;
                }
            });
            board.add(tile);
            boardPanel.add(tile);
        }
        frame.add(boardPanel);

        // Restart game button
        restartButton.setFont(new Font("Arial", Font.PLAIN, 16));
        restartButton.setText("Restart Game");
        restartButton.setPreferredSize(new Dimension(boardWidth, 30));
        restartButton.setFocusable(false);
        restartButton.setEnabled(false);
        restartButton.addActionListener((ActionEvent e) -> {
            if (!gameReady) {
                return;
            }
            resetGame();
        });
        restartGamePanel.add(restartButton);
        frame.add(restartGamePanel, BorderLayout.SOUTH);

        frame.pack();
        frame.setVisible(true);

        // Start game timers
        hideCardTimer = new Timer(1500, (ActionEvent e) -> {
            hideCards();
        });
        hideCardTimer.setRepeats(false);
        hideCardTimer.start();

        gameTimer = new Timer(1000, (ActionEvent e) -> {
            remainingTime--;
            timerLabel.setText("Time Remaining: " + remainingTime);
            if (remainingTime <= 0) {
                gameTimer.stop();
                this.frame.dispose();
                showLosingFrame();
            }
        });
        gameTimer.start(); // Start the countdown timer
    }

    void setupCards() {
        // Build UI-side image list according to the engine's shuffled card names
        cardSet = new ArrayList<>();
        int total = engine.size();
        for (int i = 0; i < total; i++) {
            String name = engine.getCardNameAt(i); // e.g. syntax1 or head1
            boolean isSyntax = name.startsWith("syntax");
            Image img = new ImageIcon(getClass().getResource('/' + name + ".jpg")).getImage();
            ImageIcon icon = new ImageIcon(img.getScaledInstance(cardWidth, cardHeight, Image.SCALE_SMOOTH));
            cardSet.add(new Card(name, icon, isSyntax));
        }

        Image cardBackImg = new ImageIcon(getClass().getResource("/Background.jpg")).getImage();
        cardBackImageIcon = new ImageIcon(cardBackImg.getScaledInstance(cardWidth, cardHeight, Image.SCALE_SMOOTH));
    }

    void shuffleCards() {
        engine.shuffle();
        // rebuild the UI-side cardSet order from engine
        setupCards();
    }

    // matching is now handled by GameEngine.select() invoked in action listener

    void hideCards() {
        if (gameReady && card1Selected != null && card2Selected != null) {
            card1Selected.setIcon(cardBackImageIcon);
            card2Selected.setIcon(cardBackImageIcon);
            card1Selected = null;
            card2Selected = null;
        } else {
            for (JButton tile : board) {
                tile.setIcon(cardBackImageIcon);
            }
            gameReady = true;
            restartButton.setEnabled(true);
        }
    }

    private void resetGame() {
        gameReady = false;
        restartButton.setEnabled(false);
        card1Selected = null;
        card2Selected = null;
        engine.reset();
        engine.shuffle();
        errorCount = engine.getErrorCount();
        remainingTime = engine.getRemainingTime(); // Reset timer
        timerLabel.setText("Time Remaining: " + remainingTime);
        textLabel.setText("Errors: " + errorCount);
        // update UI images order to match engine
        setupCards();
        for (JButton tile : board) {
            tile.setIcon(cardBackImageIcon);
        }

        hideCardTimer.start();
        gameTimer.restart(); // Restart the game timer
    }

    private boolean allCardsMatched() {
        return engine.allMatched();
    }

    private void showLosingFrame() {
        
        Scoremysql();
        Losserpage loss = new Losserpage();
        loss.setVisible(true);
        loss.setLocationRelativeTo(null);
        loss.pack();
     
        
    }

    private void showWinningFrame() {
        Scoremysql();
        Winnerpage win = new Winnerpage();
        win.setVisible(true);
        win.setLocationRelativeTo(null);
        win.pack();
    }
    
    @SuppressWarnings({"UseSpecificCatch", "ConvertToTryWithResources"})
   private void Scoremysql() {
    try {
        Class.forName("com.mysql.cj.jdbc.Driver");

        // Establishing a connection
        try (Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/mysql", "root", "1234")) {
            // Correct SQL statement with the appropriate number of placeholders
            String sql = "INSERT INTO memory ( Name, Level, Error_Count, Time_Remaining) VALUES ( ?, ?, ?, ?)";
            PreparedStatement pat = con.prepareStatement(sql);
            pat.setString(1, Name); 
            pat.setString(2, Levelgame);     // Second placeholder for Levelgame
            pat.setInt(3, engine.getErrorCount());       // Third placeholder for errorCount
            pat.setInt(4, engine.getRemainingTime());    // Fourth placeholder for remainingTime
            
            // Execute the insert statement
            int rowsInserted = pat.executeUpdate();
            if (rowsInserted > 0) {
                System.out.println("A new record was inserted successfully!");
            }
        }
    } catch (ClassNotFoundException | SQLException e) {
        // Log ClassNotFoundException
        
    }
        // Log SQLException
        
}


    
    
}
