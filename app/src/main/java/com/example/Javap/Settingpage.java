package com.example.Javap;


public class Settingpage extends javax.swing.JFrame {

    Sound sound = new Sound();
    int i=1;
    public Settingpage() {
        initComponents();
      
    }

    @SuppressWarnings("unchecked")
    // <editor-fold defaultstate="collapsed" desc="Generated Code">//GEN-BEGIN:initComponents
    private void initComponents() {

        Right = new javax.swing.JPanel();
        SetText = new javax.swing.JLabel();
        Musicbtn = new javax.swing.JButton();
        HTPbtn = new javax.swing.JButton();
        Soundbtn = new javax.swing.JButton();
        jPanel1 = new javax.swing.JPanel();
        Logoimg = new javax.swing.JLabel();
        logoText = new javax.swing.JLabel();
        Backbtn = new javax.swing.JButton();
        AGbtn = new javax.swing.JButton();

        setDefaultCloseOperation(javax.swing.WindowConstants.EXIT_ON_CLOSE);
        setResizable(false);

        Right.setBackground(new java.awt.Color(204, 204, 204));
        Right.setPreferredSize(new java.awt.Dimension(800, 500));

        SetText.setFont(new java.awt.Font("Chiller", 1, 36)); // NOI18N
        SetText.setForeground(new java.awt.Color(0, 103, 103));
        SetText.setText("Wanna Edit Settings ?");
        SetText.setPreferredSize(new java.awt.Dimension(260, 50));

        Musicbtn.setBackground(new java.awt.Color(204, 204, 204));
        Musicbtn.setFont(new java.awt.Font("Serif", 1, 24)); // NOI18N
        Musicbtn.setForeground(new java.awt.Color(0, 103, 103));
        Musicbtn.setText("Music");
        Musicbtn.setBorder(new javax.swing.border.LineBorder(new java.awt.Color(0, 103, 103), 2, true));
        Musicbtn.setPreferredSize(new java.awt.Dimension(150, 40));
        Musicbtn.addMouseListener(new java.awt.event.MouseAdapter() {
            public void mouseClicked(java.awt.event.MouseEvent evt) {
                MusicbtnMouseClicked(evt);
            }
        });
        Musicbtn.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                MusicbtnActionPerformed(evt);
            }
        });

        HTPbtn.setBackground(new java.awt.Color(204, 204, 204));
        HTPbtn.setFont(new java.awt.Font("Serif", 1, 24)); // NOI18N
        HTPbtn.setForeground(new java.awt.Color(0, 103, 103));
        HTPbtn.setText("How to Play");
        HTPbtn.setBorder(new javax.swing.border.LineBorder(new java.awt.Color(0, 103, 103), 2, true));
        HTPbtn.setPreferredSize(new java.awt.Dimension(150, 40));
        HTPbtn.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                HTPbtnActionPerformed(evt);
            }
        });

        Soundbtn.setBackground(new java.awt.Color(204, 204, 204));
        Soundbtn.setFont(new java.awt.Font("Serif", 1, 24)); // NOI18N
        Soundbtn.setForeground(new java.awt.Color(0, 103, 103));
        Soundbtn.setText("Sound Eff");
        Soundbtn.setBorder(new javax.swing.border.LineBorder(new java.awt.Color(0, 103, 103), 2, true));
        Soundbtn.setPreferredSize(new java.awt.Dimension(150, 40));

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

        Backbtn.setBackground(new java.awt.Color(204, 204, 204));
        Backbtn.setFont(new java.awt.Font("Serif", 1, 24)); // NOI18N
        Backbtn.setForeground(new java.awt.Color(0, 103, 103));
        Backbtn.setText("Back");
        Backbtn.setBorder(new javax.swing.border.LineBorder(new java.awt.Color(0, 103, 103), 2, true));
        Backbtn.setPreferredSize(new java.awt.Dimension(150, 40));
        Backbtn.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                BackbtnActionPerformed(evt);
            }
        });

        AGbtn.setBackground(new java.awt.Color(204, 204, 204));
        AGbtn.setFont(new java.awt.Font("Serif", 1, 24)); // NOI18N
        AGbtn.setForeground(new java.awt.Color(0, 103, 103));
        AGbtn.setText("About Game");
        AGbtn.setBorder(new javax.swing.border.LineBorder(new java.awt.Color(0, 103, 103), 2, true));
        AGbtn.setPreferredSize(new java.awt.Dimension(150, 40));
        AGbtn.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                AGbtnActionPerformed(evt);
            }
        });

        javax.swing.GroupLayout RightLayout = new javax.swing.GroupLayout(Right);
        Right.setLayout(RightLayout);
        RightLayout.setHorizontalGroup(
            RightLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(RightLayout.createSequentialGroup()
                .addComponent(jPanel1, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addGroup(RightLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addGroup(RightLayout.createSequentialGroup()
                        .addGap(70, 70, 70)
                        .addComponent(SetText, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                        .addContainerGap(70, Short.MAX_VALUE))
                    .addGroup(RightLayout.createSequentialGroup()
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                        .addGroup(RightLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                            .addComponent(Musicbtn, javax.swing.GroupLayout.Alignment.TRAILING, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                            .addComponent(HTPbtn, javax.swing.GroupLayout.Alignment.TRAILING, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                            .addComponent(Soundbtn, javax.swing.GroupLayout.Alignment.TRAILING, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                            .addComponent(Backbtn, javax.swing.GroupLayout.Alignment.TRAILING, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                            .addComponent(AGbtn, javax.swing.GroupLayout.Alignment.TRAILING, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))
                        .addGap(125, 125, 125))))
        );
        RightLayout.setVerticalGroup(
            RightLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(RightLayout.createSequentialGroup()
                .addGap(30, 30, 30)
                .addComponent(SetText, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addGap(30, 30, 30)
                .addComponent(Musicbtn, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addGap(30, 30, 30)
                .addComponent(Soundbtn, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addGap(30, 30, 30)
                .addComponent(AGbtn, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addGap(30, 30, 30)
                .addComponent(HTPbtn, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addGap(30, 30, 30)
                .addComponent(Backbtn, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
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
            .addComponent(Right, javax.swing.GroupLayout.Alignment.TRAILING, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
        );

        pack();
    }// </editor-fold>//GEN-END:initComponents

    private void HTPbtnActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_HTPbtnActionPerformed
        Howtoplaypage htp = new Howtoplaypage();
        htp.setVisible(true);
        htp.setLocationRelativeTo(null);
        htp.pack();
        this.dispose();
        playSE(1);
    }//GEN-LAST:event_HTPbtnActionPerformed
 
    private void MusicbtnActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_MusicbtnActionPerformed
       sound.isPaused = !sound.isPaused;
    }//GEN-LAST:event_MusicbtnActionPerformed

    private void BackbtnActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_BackbtnActionPerformed
        @SuppressWarnings("LocalVariableHidesMemberVariable")
        Mainpage main = new Mainpage();
        main.setVisible(true);
        main.setLocationRelativeTo(null);
        main.pack();
        this.dispose();
        playSE(1);
    }//GEN-LAST:event_BackbtnActionPerformed

    private void AGbtnActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_AGbtnActionPerformed
        Aboutgamepage set = new Aboutgamepage();
        set.setVisible(true);
        set.setLocationRelativeTo(null);
        set.pack();
        this.dispose();
        playSE(1);
    }//GEN-LAST:event_AGbtnActionPerformed

    private void MusicbtnMouseClicked(java.awt.event.MouseEvent evt) {//GEN-FIRST:event_MusicbtnMouseClicked
        
            sound.isPaused = false;
          
    }//GEN-LAST:event_MusicbtnMouseClicked
    
    public void playSE(int i){
        sound.setFile(i);
        sound.play();
    }

    

    // Variables declaration - do not modify//GEN-BEGIN:variables
    private javax.swing.JButton AGbtn;
    private javax.swing.JButton Backbtn;
    private javax.swing.JButton HTPbtn;
    private javax.swing.JLabel Logoimg;
    private javax.swing.JButton Musicbtn;
    private javax.swing.JPanel Right;
    private javax.swing.JLabel SetText;
    private javax.swing.JButton Soundbtn;
    private javax.swing.JPanel jPanel1;
    private javax.swing.JLabel logoText;
    // End of variables declaration//GEN-END:variables

    private void elseif(boolean b) {
        throw new UnsupportedOperationException("Not supported yet."); // Generated from nbfs://nbhost/SystemFileSystem/Templates/Classes/Code/GeneratedMethodBody
    }
}



