
package com.example.Javap;


public class Losserpage extends javax.swing.JFrame {

    Sound sound = new Sound();
    public Losserpage() {
        initComponents();
    }

    
    @SuppressWarnings("unchecked")
    // <editor-fold defaultstate="collapsed" desc="Generated Code">//GEN-BEGIN:initComponents
    private void initComponents() {

        jPanel1 = new javax.swing.JPanel();
        LosserText = new javax.swing.JLabel();
        Replaybtn = new javax.swing.JButton();
        Levelbtn = new javax.swing.JButton();
        Settingsbtn = new javax.swing.JButton();
        Backbtn = new javax.swing.JButton();

        setDefaultCloseOperation(javax.swing.WindowConstants.EXIT_ON_CLOSE);

        jPanel1.setBackground(new java.awt.Color(204, 204, 204));
        jPanel1.setBorder(new javax.swing.border.LineBorder(new java.awt.Color(0, 103, 103), 5, true));
        jPanel1.setPreferredSize(new java.awt.Dimension(400, 400));

        LosserText.setFont(new java.awt.Font("Chiller", 1, 36)); // NOI18N
        LosserText.setForeground(new java.awt.Color(0, 103, 103));
        LosserText.setHorizontalAlignment(javax.swing.SwingConstants.CENTER);
        LosserText.setText("OH ! It's Okay, You Lose");
        LosserText.setPreferredSize(new java.awt.Dimension(300, 50));
        LosserText.setRequestFocusEnabled(false);

        Replaybtn.setBackground(new java.awt.Color(204, 204, 204));
        Replaybtn.setFont(new java.awt.Font("SansSerif", 1, 18)); // NOI18N
        Replaybtn.setForeground(new java.awt.Color(0, 103, 103));
        Replaybtn.setText("Replay");
        Replaybtn.setBorder(new javax.swing.border.LineBorder(new java.awt.Color(0, 103, 103), 2, true));
        Replaybtn.setPreferredSize(new java.awt.Dimension(100, 30));
        Replaybtn.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                ReplaybtnActionPerformed(evt);
            }
        });

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

        javax.swing.GroupLayout jPanel1Layout = new javax.swing.GroupLayout(jPanel1);
        jPanel1.setLayout(jPanel1Layout);
        jPanel1Layout.setHorizontalGroup(
            jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(jPanel1Layout.createSequentialGroup()
                .addContainerGap(45, Short.MAX_VALUE)
                .addComponent(LosserText, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addGap(45, 45, 45))
            .addGroup(jPanel1Layout.createSequentialGroup()
                .addGap(145, 145, 145)
                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addComponent(Replaybtn, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addComponent(Levelbtn, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addComponent(Settingsbtn, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addComponent(Backbtn, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))
                .addContainerGap(javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE))
        );
        jPanel1Layout.setVerticalGroup(
            jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(jPanel1Layout.createSequentialGroup()
                .addGap(30, 30, 30)
                .addComponent(LosserText, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addGap(30, 30, 30)
                .addComponent(Replaybtn, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addGap(30, 30, 30)
                .addComponent(Levelbtn, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addGap(30, 30, 30)
                .addComponent(Settingsbtn, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addGap(30, 30, 30)
                .addComponent(Backbtn, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addContainerGap(70, Short.MAX_VALUE))
        );

        javax.swing.GroupLayout layout = new javax.swing.GroupLayout(getContentPane());
        getContentPane().setLayout(layout);
        layout.setHorizontalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addComponent(jPanel1, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
        );
        layout.setVerticalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addComponent(jPanel1, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
        );

        pack();
    }// </editor-fold>//GEN-END:initComponents

    private void LevelbtnActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_LevelbtnActionPerformed
       Levelpage level = new Levelpage();
       level.setVisible(true);
       level.pack();
       level.setLocationRelativeTo(null);
       this.dispose();
       playSE(1);
    }//GEN-LAST:event_LevelbtnActionPerformed

    private void SettingsbtnActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_SettingsbtnActionPerformed
        Settingpage Set = new Settingpage();
        Set.setVisible(true);
        Set.pack();
        Set.setLocationRelativeTo(null);
        this.dispose();
        playSE(1);
    }//GEN-LAST:event_SettingsbtnActionPerformed

    private void BackbtnActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_BackbtnActionPerformed
        Mainpage main = new Mainpage();
        main.setVisible(true);
        main.setLocationRelativeTo(null);
        main.pack();
        this.dispose();
        playSE(1);
    }//GEN-LAST:event_BackbtnActionPerformed

    private void ReplaybtnActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_ReplaybtnActionPerformed
       MatchCards match = new MatchCards();
       this.dispose();
       playSE(1);
    }//GEN-LAST:event_ReplaybtnActionPerformed

     public void playSE(int i){
        sound.setFile(i);
        sound.play();
    }
    // Variables declaration - do not modify//GEN-BEGIN:variables
    private javax.swing.JButton Backbtn;
    private javax.swing.JButton Levelbtn;
    private javax.swing.JLabel LosserText;
    private javax.swing.JButton Replaybtn;
    private javax.swing.JButton Settingsbtn;
    private javax.swing.JPanel jPanel1;
    // End of variables declaration//GEN-END:variables
}
