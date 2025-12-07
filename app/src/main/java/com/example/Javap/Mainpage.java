package com.example.Javap;

 
public class Mainpage extends javax.swing.JFrame {

    Sound sound = new Sound();

    
    @SuppressWarnings({"OverridableMethodCallInConstructor", "DeadBranch"})
    public Mainpage() {
        initComponents();
        
            
    }

    @SuppressWarnings("unchecked")
    // <editor-fold defaultstate="collapsed" desc="Generated Code">//GEN-BEGIN:initComponents
    private void initComponents() {

        Right = new javax.swing.JPanel();
        WelText = new javax.swing.JLabel();
        Startbtn = new javax.swing.JButton();
        Creditbtn = new javax.swing.JButton();
        Settingbtn = new javax.swing.JButton();
        Scorebtn = new javax.swing.JButton();
        jPanel1 = new javax.swing.JPanel();
        Logoimg = new javax.swing.JLabel();
        logoText = new javax.swing.JLabel();

        setDefaultCloseOperation(javax.swing.WindowConstants.EXIT_ON_CLOSE);
        setResizable(false);

        Right.setBackground(new java.awt.Color(204, 204, 204));
        Right.setPreferredSize(new java.awt.Dimension(800, 500));

        WelText.setFont(new java.awt.Font("Chiller", 1, 36)); // NOI18N
        WelText.setForeground(new java.awt.Color(0, 103, 103));
        WelText.setText("Welcome, User !");
        WelText.setPreferredSize(new java.awt.Dimension(200, 50));

        Startbtn.setBackground(new java.awt.Color(204, 204, 204));
        Startbtn.setFont(new java.awt.Font("Serif", 1, 24)); // NOI18N
        Startbtn.setForeground(new java.awt.Color(0, 103, 103));
        Startbtn.setText("Start");
        Startbtn.setBorder(new javax.swing.border.LineBorder(new java.awt.Color(0, 103, 103), 2, true));
        Startbtn.setPreferredSize(new java.awt.Dimension(150, 40));
        Startbtn.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                StartbtnActionPerformed(evt);
            }
        });

        Creditbtn.setBackground(new java.awt.Color(204, 204, 204));
        Creditbtn.setFont(new java.awt.Font("Serif", 1, 24)); // NOI18N
        Creditbtn.setForeground(new java.awt.Color(0, 103, 103));
        Creditbtn.setText("Credits");
        Creditbtn.setBorder(new javax.swing.border.LineBorder(new java.awt.Color(0, 103, 103), 2, true));
        Creditbtn.setPreferredSize(new java.awt.Dimension(150, 40));
        Creditbtn.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                CreditbtnActionPerformed(evt);
            }
        });

        Settingbtn.setBackground(new java.awt.Color(204, 204, 204));
        Settingbtn.setFont(new java.awt.Font("Serif", 1, 24)); // NOI18N
        Settingbtn.setForeground(new java.awt.Color(0, 103, 103));
        Settingbtn.setText("Setting");
        Settingbtn.setBorder(new javax.swing.border.LineBorder(new java.awt.Color(0, 103, 103), 2, true));
        Settingbtn.setPreferredSize(new java.awt.Dimension(150, 40));
        Settingbtn.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                SettingbtnActionPerformed(evt);
            }
        });

        Scorebtn.setBackground(new java.awt.Color(204, 204, 204));
        Scorebtn.setFont(new java.awt.Font("Serif", 1, 24)); // NOI18N
        Scorebtn.setForeground(new java.awt.Color(0, 103, 103));
        Scorebtn.setText("Score");
        Scorebtn.setBorder(new javax.swing.border.LineBorder(new java.awt.Color(0, 103, 103), 2, true));
        Scorebtn.setPreferredSize(new java.awt.Dimension(150, 40));
        Scorebtn.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                ScorebtnActionPerformed(evt);
            }
        });

        jPanel1.setBackground(new java.awt.Color(0, 103, 103));
        jPanel1.setPreferredSize(new java.awt.Dimension(400, 500));

        Logoimg.setHorizontalAlignment(javax.swing.SwingConstants.CENTER);
        Logoimg.setIcon(new javax.swing.ImageIcon(getClass().getResource("/logo.png"))); // NOI18N

        logoText.setFont(new java.awt.Font("Snap ITC", 1, 36)); // NOI18N
        logoText.setForeground(new java.awt.Color(200, 0, 0));
        logoText.setHorizontalAlignment(javax.swing.SwingConstants.CENTER);
        logoText.setText("Flipping Tiles");
        logoText.setPreferredSize(new java.awt.Dimension(300, 50));

        javax.swing.GroupLayout jPanel1Layout = new javax.swing.GroupLayout(jPanel1);
        jPanel1.setLayout(jPanel1Layout);
        jPanel1Layout.setHorizontalGroup(
            jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(jPanel1Layout.createSequentialGroup()
                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addGroup(jPanel1Layout.createSequentialGroup()
                        .addGap(120, 120, 120)
                        .addComponent(Logoimg, javax.swing.GroupLayout.PREFERRED_SIZE, 200, javax.swing.GroupLayout.PREFERRED_SIZE))
                    .addGroup(jPanel1Layout.createSequentialGroup()
                        .addGap(60, 60, 60)
                        .addComponent(logoText, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)))
                .addGap(60, 60, 60))
        );
        jPanel1Layout.setVerticalGroup(
            jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(jPanel1Layout.createSequentialGroup()
                .addGap(80, 80, 80)
                .addComponent(Logoimg, javax.swing.GroupLayout.PREFERRED_SIZE, 200, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addGap(50, 50, 50)
                .addComponent(logoText, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addContainerGap(120, Short.MAX_VALUE))
        );

        javax.swing.GroupLayout RightLayout = new javax.swing.GroupLayout(Right);
        Right.setLayout(RightLayout);
        RightLayout.setHorizontalGroup(
            RightLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(RightLayout.createSequentialGroup()
                .addComponent(jPanel1, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addGroup(RightLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addGroup(RightLayout.createSequentialGroup()
                        .addGap(100, 100, 100)
                        .addComponent(WelText, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                        .addContainerGap(100, Short.MAX_VALUE))
                    .addGroup(RightLayout.createSequentialGroup()
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                        .addGroup(RightLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                            .addComponent(Startbtn, javax.swing.GroupLayout.Alignment.TRAILING, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                            .addComponent(Creditbtn, javax.swing.GroupLayout.Alignment.TRAILING, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                            .addComponent(Settingbtn, javax.swing.GroupLayout.Alignment.TRAILING, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                            .addComponent(Scorebtn, javax.swing.GroupLayout.Alignment.TRAILING, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))
                        .addGap(125, 125, 125))))
        );
        RightLayout.setVerticalGroup(
            RightLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(RightLayout.createSequentialGroup()
                .addGap(40, 40, 40)
                .addComponent(WelText, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addGap(35, 35, 35)
                .addComponent(Startbtn, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addGap(35, 35, 35)
                .addComponent(Scorebtn, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addGap(35, 35, 35)
                .addComponent(Settingbtn, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addGap(35, 35, 35)
                .addComponent(Creditbtn, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addContainerGap(javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE))
            .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, RightLayout.createSequentialGroup()
                .addGap(0, 0, Short.MAX_VALUE)
                .addComponent(jPanel1, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))
        );

        javax.swing.GroupLayout layout = new javax.swing.GroupLayout(getContentPane());
        getContentPane().setLayout(layout);
        layout.setHorizontalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addComponent(Right, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
        );
        layout.setVerticalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addComponent(Right, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
        );

        pack();
    }// </editor-fold>//GEN-END:initComponents

    private void CreditbtnActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_CreditbtnActionPerformed
        Creditspage Credit = new Creditspage();
        Credit.setVisible(true);
        Credit.pack();
        Credit.setLocationRelativeTo(null);
        this.dispose();
        playSE(1);
        
    }//GEN-LAST:event_CreditbtnActionPerformed

    private void StartbtnActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_StartbtnActionPerformed
       Levelpage level = new Levelpage();
       level.setVisible(true);
       level.pack();
       level.setLocationRelativeTo(null);
       this.dispose();
       playSE(1);
    }//GEN-LAST:event_StartbtnActionPerformed

    @SuppressWarnings("null")
    private void ScorebtnActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_ScorebtnActionPerformed
        Scorepage Score = new Scorepage();
        Score.setVisible(true);
        Score.pack();
        Score.setLocationRelativeTo(null);
        this.dispose();
        playSE(1);
    }//GEN-LAST:event_ScorebtnActionPerformed

    private void SettingbtnActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_SettingbtnActionPerformed
        Settingpage Set = new Settingpage();
        Set.setVisible(true);
        Set.pack();
        Set.setLocationRelativeTo(null);
        this.dispose();
        playSE(1);
    }//GEN-LAST:event_SettingbtnActionPerformed

    public void PlayMusic(int i){
            sound.setFile(i);
            sound.play();
            sound.loop();
           
      }
    
    public void playSE(int i){
        sound.setFile(i);
        sound.play();
    }
    
    public void StopMusic(){
         
            sound.stop();
        
//    }
    }
    
    // Variables declaration - do not modify//GEN-BEGIN:variables
    private javax.swing.JButton Creditbtn;
    private javax.swing.JLabel Logoimg;
    private javax.swing.JPanel Right;
    private javax.swing.JButton Scorebtn;
    private javax.swing.JButton Settingbtn;
    private javax.swing.JButton Startbtn;
    private javax.swing.JLabel WelText;
    private javax.swing.JPanel jPanel1;
    private javax.swing.JLabel logoText;
    // End of variables declaration//GEN-END:variables
}
