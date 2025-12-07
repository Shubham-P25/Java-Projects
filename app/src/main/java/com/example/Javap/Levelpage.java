package com.example.Javap;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.logging.Level;
import java.util.logging.Logger;


public class Levelpage extends javax.swing.JFrame {

    Sound sound = new Sound();
    String Nameuser = null;
    public Levelpage() {
        initComponents();
    }

    @SuppressWarnings("unchecked")
    // <editor-fold defaultstate="collapsed" desc="Generated Code">//GEN-BEGIN:initComponents
    private void initComponents() {

        Right = new javax.swing.JPanel();
        logoText = new javax.swing.JPanel();
        jLabel1 = new javax.swing.JLabel();
        logoimg = new javax.swing.JLabel();
        jLabel2 = new javax.swing.JLabel();
        PlayText = new javax.swing.JLabel();
        Namebtn = new javax.swing.JButton();
        backbtn = new javax.swing.JButton();
        Nightbtn = new javax.swing.JButton();
        Interbtn = new javax.swing.JButton();
        NameText = new javax.swing.JTextField();
        Bignbtn = new javax.swing.JButton();

        setDefaultCloseOperation(javax.swing.WindowConstants.EXIT_ON_CLOSE);
        setResizable(false);

        Right.setBackground(new java.awt.Color(204, 204, 204));
        Right.setPreferredSize(new java.awt.Dimension(800, 500));

        logoText.setBackground(new java.awt.Color(0, 103, 103));
        logoText.setPreferredSize(new java.awt.Dimension(400, 500));

        logoimg.setHorizontalAlignment(javax.swing.SwingConstants.CENTER);
        logoimg.setIcon(new javax.swing.ImageIcon(getClass().getResource("/logo.png"))); // NOI18N
        logoimg.setCursor(new java.awt.Cursor(java.awt.Cursor.DEFAULT_CURSOR));

        jLabel2.setFont(new java.awt.Font("Snap ITC", 1, 36)); // NOI18N
        jLabel2.setForeground(new java.awt.Color(200, 0, 0));
        jLabel2.setHorizontalAlignment(javax.swing.SwingConstants.CENTER);
        jLabel2.setText("Flipping Tiles");
        jLabel2.setPreferredSize(new java.awt.Dimension(300, 50));

        javax.swing.GroupLayout logoTextLayout = new javax.swing.GroupLayout(logoText);
        logoText.setLayout(logoTextLayout);
        logoTextLayout.setHorizontalGroup(
            logoTextLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(logoTextLayout.createSequentialGroup()
                .addGroup(logoTextLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addGroup(logoTextLayout.createSequentialGroup()
                        .addGap(178, 178, 178)
                        .addComponent(jLabel1))
                    .addGroup(logoTextLayout.createSequentialGroup()
                        .addGap(60, 60, 60)
                        .addComponent(jLabel2, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)))
                .addContainerGap(40, Short.MAX_VALUE))
            .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, logoTextLayout.createSequentialGroup()
                .addGap(0, 0, Short.MAX_VALUE)
                .addComponent(logoimg)
                .addGap(80, 80, 80))
        );
        logoTextLayout.setVerticalGroup(
            logoTextLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(logoTextLayout.createSequentialGroup()
                .addGap(80, 80, 80)
                .addComponent(logoimg)
                .addGap(50, 50, 50)
                .addComponent(jLabel2, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addGap(18, 18, 18)
                .addComponent(jLabel1)
                .addContainerGap(102, Short.MAX_VALUE))
        );

        PlayText.setFont(new java.awt.Font("Chiller", 1, 36)); // NOI18N
        PlayText.setForeground(new java.awt.Color(0, 103, 103));
        PlayText.setText("Lets, Strat Playing...");
        PlayText.setPreferredSize(new java.awt.Dimension(250, 50));

        Namebtn.setBackground(new java.awt.Color(204, 204, 204));
        Namebtn.setFont(new java.awt.Font("Serif", 1, 24)); // NOI18N
        Namebtn.setForeground(new java.awt.Color(0, 103, 103));
        Namebtn.setText("Enter");
        Namebtn.setBorder(new javax.swing.border.LineBorder(new java.awt.Color(0, 103, 103), 2, true));
        Namebtn.setPreferredSize(new java.awt.Dimension(100, 40));
        Namebtn.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                NamebtnActionPerformed(evt);
            }
        });

        backbtn.setBackground(new java.awt.Color(204, 204, 204));
        backbtn.setFont(new java.awt.Font("Serif", 1, 24)); // NOI18N
        backbtn.setForeground(new java.awt.Color(0, 103, 103));
        backbtn.setText("Back");
        backbtn.setBorder(new javax.swing.border.LineBorder(new java.awt.Color(0, 103, 103), 2, true));
        backbtn.setPreferredSize(new java.awt.Dimension(150, 40));
        backbtn.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                backbtnActionPerformed(evt);
            }
        });

        Nightbtn.setBackground(new java.awt.Color(204, 204, 204));
        Nightbtn.setFont(new java.awt.Font("Serif", 1, 24)); // NOI18N
        Nightbtn.setForeground(new java.awt.Color(0, 103, 103));
        Nightbtn.setText("Nightmare");
        Nightbtn.setBorder(new javax.swing.border.LineBorder(new java.awt.Color(0, 103, 103), 2, true));
        Nightbtn.setPreferredSize(new java.awt.Dimension(150, 40));

        Interbtn.setBackground(new java.awt.Color(204, 204, 204));
        Interbtn.setFont(new java.awt.Font("Serif", 1, 24)); // NOI18N
        Interbtn.setForeground(new java.awt.Color(0, 103, 103));
        Interbtn.setText("Intermidate");
        Interbtn.setBorder(new javax.swing.border.LineBorder(new java.awt.Color(0, 103, 103), 2, true));
        Interbtn.setPreferredSize(new java.awt.Dimension(150, 40));

        NameText.setBackground(new java.awt.Color(204, 204, 204));
        NameText.setFont(new java.awt.Font("Chiller", 1, 36)); // NOI18N
        NameText.setForeground(new java.awt.Color(0, 103, 103));
        NameText.setText("Your Name Please!");
        NameText.setBorder(new javax.swing.border.LineBorder(new java.awt.Color(0, 103, 103), 2, true));
        NameText.setCaretColor(new java.awt.Color(0, 103, 103));
        NameText.setPreferredSize(new java.awt.Dimension(220, 40));
        NameText.setSelectedTextColor(new java.awt.Color(204, 204, 204));
        NameText.setSelectionColor(new java.awt.Color(0, 103, 103));

        Bignbtn.setBackground(new java.awt.Color(204, 204, 204));
        Bignbtn.setFont(new java.awt.Font("Serif", 1, 24)); // NOI18N
        Bignbtn.setForeground(new java.awt.Color(0, 103, 103));
        Bignbtn.setText("Bignner");
        Bignbtn.setBorder(new javax.swing.border.LineBorder(new java.awt.Color(0, 103, 103), 2, true));
        Bignbtn.setPreferredSize(new java.awt.Dimension(150, 40));
        Bignbtn.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                BignbtnActionPerformed(evt);
            }
        });

        javax.swing.GroupLayout RightLayout = new javax.swing.GroupLayout(Right);
        Right.setLayout(RightLayout);
        RightLayout.setHorizontalGroup(
            RightLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(RightLayout.createSequentialGroup()
                .addComponent(logoText, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addGroup(RightLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addGroup(RightLayout.createSequentialGroup()
                        .addGroup(RightLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                            .addGroup(RightLayout.createSequentialGroup()
                                .addGap(75, 75, 75)
                                .addComponent(PlayText, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))
                            .addGroup(RightLayout.createSequentialGroup()
                                .addGap(31, 31, 31)
                                .addComponent(NameText, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                                .addGap(18, 18, 18)
                                .addComponent(Namebtn, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)))
                        .addContainerGap(31, Short.MAX_VALUE))
                    .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, RightLayout.createSequentialGroup()
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                        .addGroup(RightLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                            .addComponent(backbtn, javax.swing.GroupLayout.Alignment.TRAILING, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                            .addComponent(Nightbtn, javax.swing.GroupLayout.Alignment.TRAILING, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                            .addComponent(Interbtn, javax.swing.GroupLayout.Alignment.TRAILING, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                            .addComponent(Bignbtn, javax.swing.GroupLayout.Alignment.TRAILING, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))
                        .addGap(125, 125, 125))))
        );
        RightLayout.setVerticalGroup(
            RightLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, RightLayout.createSequentialGroup()
                .addGap(0, 0, Short.MAX_VALUE)
                .addComponent(logoText, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))
            .addGroup(RightLayout.createSequentialGroup()
                .addGap(30, 30, 30)
                .addComponent(PlayText, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addGap(18, 18, 18)
                .addGroup(RightLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(NameText, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addComponent(Namebtn, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))
                .addGap(30, 30, 30)
                .addComponent(Bignbtn, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addGap(30, 30, 30)
                .addComponent(Interbtn, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addGap(30, 30, 30)
                .addComponent(Nightbtn, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addGap(30, 30, 30)
                .addComponent(backbtn, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addContainerGap(javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE))
        );

        javax.swing.GroupLayout layout = new javax.swing.GroupLayout(getContentPane());
        getContentPane().setLayout(layout);
        layout.setHorizontalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addComponent(Right, javax.swing.GroupLayout.Alignment.TRAILING, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
        );
        layout.setVerticalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, layout.createSequentialGroup()
                .addGap(0, 0, Short.MAX_VALUE)
                .addComponent(Right, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))
        );

        pack();
    }// </editor-fold>//GEN-END:initComponents

    private void backbtnActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_backbtnActionPerformed
        Mainpage main = new Mainpage();
        main.setVisible(true);
        main.setLocationRelativeTo(null);
        main.pack();
        this.dispose();
        playSE(1);
    }//GEN-LAST:event_backbtnActionPerformed

    private void NamebtnActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_NamebtnActionPerformed
       Nameuser = NameText.getText();
       System.out.println(Nameuser);

        
    }//GEN-LAST:event_NamebtnActionPerformed
  
            
    private void BignbtnActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_BignbtnActionPerformed
       MatchCards match = new MatchCards();
       this.dispose();
       playSE(1);
    }//GEN-LAST:event_BignbtnActionPerformed

    public void playSE(int i){
        sound.setFile(i);
        sound.play();
    }
    

    // Variables declaration - do not modify//GEN-BEGIN:variables
    private javax.swing.JButton Bignbtn;
    private javax.swing.JButton Interbtn;
    private javax.swing.JTextField NameText;
    private javax.swing.JButton Namebtn;
    private javax.swing.JButton Nightbtn;
    private javax.swing.JLabel PlayText;
    private javax.swing.JPanel Right;
    private javax.swing.JButton backbtn;
    private javax.swing.JLabel jLabel1;
    private javax.swing.JLabel jLabel2;
    private javax.swing.JPanel logoText;
    private javax.swing.JLabel logoimg;
    // End of variables declaration//GEN-END:variables
}
