
package com.example.Javap;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;


public class Winnerpage extends javax.swing.JFrame {

   
    Sound sound = new Sound();
    public Winnerpage() {
        initComponents();
    }

    String NameofUser = null;
    @SuppressWarnings("unchecked")
    // <editor-fold defaultstate="collapsed" desc="Generated Code">//GEN-BEGIN:initComponents
    private void initComponents() {

        jPanel1 = new javax.swing.JPanel();
        Winnertext = new javax.swing.JLabel();
        Levelbtn = new javax.swing.JButton();
        Scorebtn = new javax.swing.JButton();
        Backbtn = new javax.swing.JButton();
        Settingsbtn = new javax.swing.JButton();

        setDefaultCloseOperation(javax.swing.WindowConstants.EXIT_ON_CLOSE);
        setResizable(false);

        jPanel1.setBackground(new java.awt.Color(204, 204, 204));
        jPanel1.setBorder(new javax.swing.border.LineBorder(new java.awt.Color(0, 103, 103), 5, true));
        jPanel1.setPreferredSize(new java.awt.Dimension(400, 400));

        Winnertext.setFont(new java.awt.Font("Chiller", 1, 36)); // NOI18N
        Winnertext.setForeground(new java.awt.Color(0, 103, 103));
        Winnertext.setHorizontalAlignment(javax.swing.SwingConstants.CENTER);
        Winnertext.setText("WOO HOO ! You Won !");
        Winnertext.setPreferredSize(new java.awt.Dimension(280, 50));
        Winnertext.setRequestFocusEnabled(false);

        Levelbtn.setBackground(new java.awt.Color(204, 204, 204));
        Levelbtn.setFont(new java.awt.Font("SansSerif", 1, 18)); // NOI18N
        Levelbtn.setForeground(new java.awt.Color(0, 103, 103));
        Levelbtn.setText("Level");
        Levelbtn.setBorder(new javax.swing.border.LineBorder(new java.awt.Color(0, 103, 103), 2, true));
        Levelbtn.setPreferredSize(new java.awt.Dimension(100, 30));
        Levelbtn.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                LevelbtnActionPerformed(evt);
            }
        });

        Scorebtn.setBackground(new java.awt.Color(204, 204, 204));
        Scorebtn.setFont(new java.awt.Font("SansSerif", 1, 18)); // NOI18N
        Scorebtn.setForeground(new java.awt.Color(0, 103, 103));
        Scorebtn.setText("Score");
        Scorebtn.setBorder(new javax.swing.border.LineBorder(new java.awt.Color(0, 103, 103), 2, true));
        Scorebtn.setPreferredSize(new java.awt.Dimension(100, 30));
        Scorebtn.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                ScorebtnActionPerformed(evt);
            }
        });

        Backbtn.setBackground(new java.awt.Color(204, 204, 204));
        Backbtn.setFont(new java.awt.Font("SansSerif", 1, 18)); // NOI18N
        Backbtn.setForeground(new java.awt.Color(0, 103, 103));
        Backbtn.setText("Back");
        Backbtn.setBorder(new javax.swing.border.LineBorder(new java.awt.Color(0, 103, 103), 2, true));
        Backbtn.setPreferredSize(new java.awt.Dimension(100, 30));
        Backbtn.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                BackbtnActionPerformed(evt);
            }
        });

        Settingsbtn.setBackground(new java.awt.Color(204, 204, 204));
        Settingsbtn.setFont(new java.awt.Font("SansSerif", 1, 18)); // NOI18N
        Settingsbtn.setForeground(new java.awt.Color(0, 103, 103));
        Settingsbtn.setText("Settings");
        Settingsbtn.setBorder(new javax.swing.border.LineBorder(new java.awt.Color(0, 103, 103), 2, true));
        Settingsbtn.setPreferredSize(new java.awt.Dimension(100, 30));
        Settingsbtn.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                SettingsbtnActionPerformed(evt);
            }
        });

        javax.swing.GroupLayout jPanel1Layout = new javax.swing.GroupLayout(jPanel1);
        jPanel1.setLayout(jPanel1Layout);
        jPanel1Layout.setHorizontalGroup(
            jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, jPanel1Layout.createSequentialGroup()
                .addContainerGap(67, Short.MAX_VALUE)
                .addComponent(Winnertext, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addGap(43, 43, 43))
            .addGroup(jPanel1Layout.createSequentialGroup()
                .addGap(143, 143, 143)
                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING, false)
                    .addComponent(Levelbtn, javax.swing.GroupLayout.DEFAULT_SIZE, 106, Short.MAX_VALUE)
                    .addComponent(Backbtn, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                    .addComponent(Settingsbtn, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                    .addComponent(Scorebtn, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE))
                .addContainerGap(javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE))
        );
        jPanel1Layout.setVerticalGroup(
            jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(jPanel1Layout.createSequentialGroup()
                .addGap(30, 30, 30)
                .addComponent(Winnertext, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addGap(30, 30, 30)
                .addComponent(Levelbtn, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addGap(30, 30, 30)
                .addComponent(Settingsbtn, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addGap(30, 30, 30)
                .addComponent(Scorebtn, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addGap(30, 30, 30)
                .addComponent(Backbtn, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addContainerGap(70, Short.MAX_VALUE))
        );

        javax.swing.GroupLayout layout = new javax.swing.GroupLayout(getContentPane());
        getContentPane().setLayout(layout);
        layout.setHorizontalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addComponent(jPanel1, javax.swing.GroupLayout.Alignment.TRAILING, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
        );
        layout.setVerticalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addComponent(jPanel1, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
        );

        pack();
    }// </editor-fold>//GEN-END:initComponents

    private void ScorebtnActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_ScorebtnActionPerformed
        Scorepage Score = new Scorepage();
        Score.setVisible(true);
        Score.pack();
        Score.setLocationRelativeTo(null);
        this.dispose();
        playSE(1);
    }//GEN-LAST:event_ScorebtnActionPerformed

    private void LevelbtnActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_LevelbtnActionPerformed
       Levelpage level = new Levelpage();
       level.setVisible(true);
       level.pack();
       level.setLocationRelativeTo(null);
       this.dispose();
       playSE(1);
    }//GEN-LAST:event_LevelbtnActionPerformed

    private void BackbtnActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_BackbtnActionPerformed
        Mainpage main = new Mainpage();
        main.setVisible(true);
        main.setLocationRelativeTo(null);
        main.pack();
        this.dispose();
        playSE(1);
    }//GEN-LAST:event_BackbtnActionPerformed

    private void SettingsbtnActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_SettingsbtnActionPerformed
        Settingpage Set = new Settingpage();
        Set.setVisible(true);
        Set.pack();
        Set.setLocationRelativeTo(null);
        this.dispose();
        playSE(1);
    }//GEN-LAST:event_SettingsbtnActionPerformed
    
   
    
        public void playSE(int i){
        sound.setFile(i);
        sound.play();
        }

    // Variables declaration - do not modify//GEN-BEGIN:variables
    private javax.swing.JButton Backbtn;
    private javax.swing.JButton Levelbtn;
    private javax.swing.JButton Scorebtn;
    private javax.swing.JButton Settingsbtn;
    private javax.swing.JLabel Winnertext;
    private javax.swing.JPanel jPanel1;
    // End of variables declaration//GEN-END:variables
}
