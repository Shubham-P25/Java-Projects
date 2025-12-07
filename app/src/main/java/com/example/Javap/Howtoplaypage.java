package com.example.Javap;


public class Howtoplaypage extends javax.swing.JFrame {

    Sound sound = new Sound();
    public Howtoplaypage() {
        initComponents();
    }

    @SuppressWarnings("unchecked")
    // <editor-fold defaultstate="collapsed" desc="Generated Code">//GEN-BEGIN:initComponents
    private void initComponents() {

        Right = new javax.swing.JPanel();
        HTPText = new javax.swing.JLabel();
        Backbtn = new javax.swing.JButton();
        jPanel1 = new javax.swing.JPanel();
        Logoimg = new javax.swing.JLabel();
        logoText = new javax.swing.JLabel();
        P1 = new javax.swing.JLabel();
        P2 = new javax.swing.JLabel();
        P3 = new javax.swing.JLabel();
        P5 = new javax.swing.JLabel();
        P4 = new javax.swing.JLabel();
        P6 = new javax.swing.JLabel();
        P7 = new javax.swing.JLabel();
        P8 = new javax.swing.JLabel();
        P9 = new javax.swing.JLabel();
        P10 = new javax.swing.JLabel();
        P11 = new javax.swing.JLabel();
        P12 = new javax.swing.JLabel();
        P13 = new javax.swing.JLabel();
        P15 = new javax.swing.JLabel();
        P17 = new javax.swing.JLabel();

        setDefaultCloseOperation(javax.swing.WindowConstants.EXIT_ON_CLOSE);
        setResizable(false);

        Right.setBackground(new java.awt.Color(204, 204, 204));
        Right.setPreferredSize(new java.awt.Dimension(800, 500));

        HTPText.setFont(new java.awt.Font("Chiller", 1, 36)); // NOI18N
        HTPText.setForeground(new java.awt.Color(0, 103, 103));
        HTPText.setText("Wanna Know How to Play ?");
        HTPText.setPreferredSize(new java.awt.Dimension(315, 50));

        Backbtn.setBackground(new java.awt.Color(204, 204, 204));
        Backbtn.setFont(new java.awt.Font("Serif", 1, 18)); // NOI18N
        Backbtn.setForeground(new java.awt.Color(0, 103, 103));
        Backbtn.setText("Back -->");
        Backbtn.setBorder(new javax.swing.border.LineBorder(new java.awt.Color(0, 103, 103), 2, true));
        Backbtn.setPreferredSize(new java.awt.Dimension(100, 30));
        Backbtn.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                BackbtnActionPerformed(evt);
            }
        });

        jPanel1.setBackground(new java.awt.Color(0, 103, 103));
        jPanel1.setPreferredSize(new java.awt.Dimension(400, 500));
        jPanel1.setVerifyInputWhenFocusTarget(false);

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
                .addContainerGap(40, Short.MAX_VALUE))
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

        P1.setFont(new java.awt.Font("SansSerif", 0, 12)); // NOI18N
        P1.setForeground(new java.awt.Color(0, 103, 103));
        P1.setText("          Its a simple card game in which you have to match ");
        P1.setInheritsPopupMenu(false);
        P1.setPreferredSize(new java.awt.Dimension(300, 15));

        P2.setFont(new java.awt.Font("SansSerif", 0, 12)); // NOI18N
        P2.setForeground(new java.awt.Color(0, 103, 103));
        P2.setText("cards. But, there is a trick in here unlike other cards game");
        P2.setInheritsPopupMenu(false);
        P2.setPreferredSize(new java.awt.Dimension(300, 15));

        P3.setFont(new java.awt.Font("SansSerif", 0, 12)); // NOI18N
        P3.setForeground(new java.awt.Color(0, 103, 103));
        P3.setText("you don't need to match two similar cards. In this ,game ");
        P3.setInheritsPopupMenu(false);
        P3.setPreferredSize(new java.awt.Dimension(300, 15));

        P5.setFont(new java.awt.Font("SansSerif", 0, 12)); // NOI18N
        P5.setForeground(new java.awt.Color(0, 103, 103));
        P5.setText("to read and match the cards with your own logic.");
        P5.setInheritsPopupMenu(false);
        P5.setPreferredSize(new java.awt.Dimension(300, 15));

        P4.setFont(new java.awt.Font("SansSerif", 0, 12)); // NOI18N
        P4.setForeground(new java.awt.Color(0, 103, 103));
        P4.setText("there are two different card with a text written on it you have");
        P4.setInheritsPopupMenu(false);
        P4.setPreferredSize(new java.awt.Dimension(300, 15));

        P6.setFont(new java.awt.Font("SansSerif", 0, 12)); // NOI18N
        P6.setForeground(new java.awt.Color(0, 103, 103));
        P6.setText("        First, you have to select 2 cards and if they match then");
        P6.setInheritsPopupMenu(false);
        P6.setPreferredSize(new java.awt.Dimension(300, 15));

        P7.setFont(new java.awt.Font("SansSerif", 0, 12)); // NOI18N
        P7.setForeground(new java.awt.Color(0, 103, 103));
        P7.setText("a sound of correct option will blown or the cards will stay ");
        P7.setInheritsPopupMenu(false);
        P7.setPreferredSize(new java.awt.Dimension(300, 15));

        P8.setFont(new java.awt.Font("SansSerif", 0, 12)); // NOI18N
        P8.setForeground(new java.awt.Color(0, 103, 103));
        P8.setText("up. But, if they don't match a sound of error will blown or");
        P8.setInheritsPopupMenu(false);
        P8.setPreferredSize(new java.awt.Dimension(300, 15));

        P9.setFont(new java.awt.Font("SansSerif", 0, 12)); // NOI18N
        P9.setForeground(new java.awt.Color(0, 103, 103));
        P9.setText("the cards will flip back. You just have to read and reme-");
        P9.setInheritsPopupMenu(false);
        P9.setPreferredSize(new java.awt.Dimension(300, 15));

        P10.setFont(new java.awt.Font("SansSerif", 0, 12)); // NOI18N
        P10.setForeground(new java.awt.Color(0, 103, 103));
        P10.setText("mber the position of cards.");
        P10.setInheritsPopupMenu(false);
        P10.setPreferredSize(new java.awt.Dimension(300, 15));

        P11.setFont(new java.awt.Font("SansSerif", 0, 12)); // NOI18N
        P11.setForeground(new java.awt.Color(0, 103, 103));
        P11.setText("         Now, you know how the game works but what make ");
        P11.setInheritsPopupMenu(false);
        P11.setPreferredSize(new java.awt.Dimension(300, 15));

        P12.setFont(new java.awt.Font("SansSerif", 0, 12)); // NOI18N
        P12.setForeground(new java.awt.Color(0, 103, 103));
        P12.setText("this game more interesting is the error count and timer ");
        P12.setInheritsPopupMenu(false);
        P12.setPreferredSize(new java.awt.Dimension(300, 15));

        P13.setFont(new java.awt.Font("SansSerif", 0, 12)); // NOI18N
        P13.setForeground(new java.awt.Color(0, 103, 103));
        P13.setText("like obstacles which prevent you form winning. This game");
        P13.setInheritsPopupMenu(false);
        P13.setPreferredSize(new java.awt.Dimension(300, 15));

        P15.setFont(new java.awt.Font("SansSerif", 0, 12)); // NOI18N
        P15.setForeground(new java.awt.Color(0, 103, 103));
        P15.setText("also divided into three levels and when you bet a game it");
        P15.setInheritsPopupMenu(false);
        P15.setPreferredSize(new java.awt.Dimension(300, 15));

        P17.setFont(new java.awt.Font("SansSerif", 0, 12)); // NOI18N
        P17.setForeground(new java.awt.Color(0, 103, 103));
        P17.setText("will show it into scores. So, Enjoy the Game !!!");
        P17.setInheritsPopupMenu(false);
        P17.setPreferredSize(new java.awt.Dimension(300, 15));

        javax.swing.GroupLayout RightLayout = new javax.swing.GroupLayout(Right);
        Right.setLayout(RightLayout);
        RightLayout.setHorizontalGroup(
            RightLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(RightLayout.createSequentialGroup()
                .addComponent(jPanel1, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addGroup(RightLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addGroup(RightLayout.createSequentialGroup()
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                        .addGroup(RightLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.TRAILING)
                            .addComponent(Backbtn, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                            .addComponent(HTPText, javax.swing.GroupLayout.PREFERRED_SIZE, 317, javax.swing.GroupLayout.PREFERRED_SIZE))
                        .addGap(32, 32, 32))
                    .addGroup(RightLayout.createSequentialGroup()
                        .addGap(39, 39, 39)
                        .addGroup(RightLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                            .addComponent(P1, javax.swing.GroupLayout.PREFERRED_SIZE, 317, javax.swing.GroupLayout.PREFERRED_SIZE)
                            .addComponent(P2, javax.swing.GroupLayout.PREFERRED_SIZE, 317, javax.swing.GroupLayout.PREFERRED_SIZE)
                            .addComponent(P3, javax.swing.GroupLayout.PREFERRED_SIZE, 317, javax.swing.GroupLayout.PREFERRED_SIZE)
                            .addComponent(P5, javax.swing.GroupLayout.PREFERRED_SIZE, 317, javax.swing.GroupLayout.PREFERRED_SIZE)
                            .addComponent(P4, javax.swing.GroupLayout.PREFERRED_SIZE, 317, javax.swing.GroupLayout.PREFERRED_SIZE)
                            .addComponent(P6, javax.swing.GroupLayout.PREFERRED_SIZE, 317, javax.swing.GroupLayout.PREFERRED_SIZE)
                            .addComponent(P7, javax.swing.GroupLayout.PREFERRED_SIZE, 317, javax.swing.GroupLayout.PREFERRED_SIZE)
                            .addComponent(P8, javax.swing.GroupLayout.PREFERRED_SIZE, 317, javax.swing.GroupLayout.PREFERRED_SIZE)
                            .addComponent(P9, javax.swing.GroupLayout.PREFERRED_SIZE, 317, javax.swing.GroupLayout.PREFERRED_SIZE)
                            .addComponent(P10, javax.swing.GroupLayout.PREFERRED_SIZE, 317, javax.swing.GroupLayout.PREFERRED_SIZE)
                            .addComponent(P11, javax.swing.GroupLayout.PREFERRED_SIZE, 317, javax.swing.GroupLayout.PREFERRED_SIZE)
                            .addComponent(P12, javax.swing.GroupLayout.PREFERRED_SIZE, 317, javax.swing.GroupLayout.PREFERRED_SIZE)
                            .addComponent(P13, javax.swing.GroupLayout.PREFERRED_SIZE, 317, javax.swing.GroupLayout.PREFERRED_SIZE)
                            .addComponent(P15, javax.swing.GroupLayout.PREFERRED_SIZE, 317, javax.swing.GroupLayout.PREFERRED_SIZE)
                            .addComponent(P17, javax.swing.GroupLayout.PREFERRED_SIZE, 317, javax.swing.GroupLayout.PREFERRED_SIZE))
                        .addContainerGap(44, Short.MAX_VALUE))))
        );
        RightLayout.setVerticalGroup(
            RightLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(RightLayout.createSequentialGroup()
                .addComponent(jPanel1, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addContainerGap(javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE))
            .addGroup(RightLayout.createSequentialGroup()
                .addGap(30, 30, 30)
                .addComponent(HTPText, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addGap(30, 30, 30)
                .addComponent(P1, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addGap(0, 0, 0)
                .addComponent(P2, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addGap(0, 0, 0)
                .addComponent(P3, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addGap(0, 0, 0)
                .addComponent(P4, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addGap(0, 0, 0)
                .addComponent(P5, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addGap(30, 30, 30)
                .addComponent(P6, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addGap(0, 0, 0)
                .addComponent(P7, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addGap(0, 0, 0)
                .addComponent(P8, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addGap(0, 0, 0)
                .addComponent(P9, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addGap(0, 0, 0)
                .addComponent(P10, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addGap(30, 30, 30)
                .addComponent(P11, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addGap(0, 0, 0)
                .addComponent(P12, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addGap(0, 0, 0)
                .addComponent(P13, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addGap(0, 0, 0)
                .addComponent(P15, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addGap(0, 0, 0)
                .addComponent(P17, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                .addComponent(Backbtn, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addGap(70, 70, 70))
        );

        jPanel1.getAccessibleContext().setAccessibleName("");

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

    private void BackbtnActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_BackbtnActionPerformed
        Settingpage set = new Settingpage();
        set.setVisible(true);
        set.setLocationRelativeTo(null);
        set.pack();
        this.dispose();
        playSE(1);
    }//GEN-LAST:event_BackbtnActionPerformed

     public void playSE(int i){
        sound.setFile(i);
        sound.play();
    }
    

    // Variables declaration - do not modify//GEN-BEGIN:variables
    private javax.swing.JButton Backbtn;
    private javax.swing.JLabel HTPText;
    private javax.swing.JLabel Logoimg;
    private javax.swing.JLabel P1;
    private javax.swing.JLabel P10;
    private javax.swing.JLabel P11;
    private javax.swing.JLabel P12;
    private javax.swing.JLabel P13;
    private javax.swing.JLabel P15;
    private javax.swing.JLabel P17;
    private javax.swing.JLabel P2;
    private javax.swing.JLabel P3;
    private javax.swing.JLabel P4;
    private javax.swing.JLabel P5;
    private javax.swing.JLabel P6;
    private javax.swing.JLabel P7;
    private javax.swing.JLabel P8;
    private javax.swing.JLabel P9;
    private javax.swing.JPanel Right;
    private javax.swing.JPanel jPanel1;
    private javax.swing.JLabel logoText;
    // End of variables declaration//GEN-END:variables
}
