package com.example.Javap;


public class Creditspage extends javax.swing.JFrame {

    Sound sound = new Sound();
    public Creditspage() {
        initComponents();
    }

    @SuppressWarnings("unchecked")
    // <editor-fold defaultstate="collapsed" desc="Generated Code">//GEN-BEGIN:initComponents
    private void initComponents() {

        Right = new javax.swing.JPanel();
        Name1 = new javax.swing.JLabel();
        Backbtn = new javax.swing.JButton();
        jPanel1 = new javax.swing.JPanel();
        Logoimg = new javax.swing.JLabel();
        logoText = new javax.swing.JLabel();
        Name2 = new javax.swing.JLabel();
        Name3 = new javax.swing.JLabel();
        Prof1 = new javax.swing.JLabel();
        Prof2 = new javax.swing.JLabel();
        Prof3 = new javax.swing.JLabel();
        Prof4 = new javax.swing.JLabel();
        Prof5 = new javax.swing.JLabel();
        Name4 = new javax.swing.JLabel();
        Name5 = new javax.swing.JLabel();
        Des1 = new javax.swing.JLabel();
        Des2 = new javax.swing.JLabel();
        Des3 = new javax.swing.JLabel();
        Des4 = new javax.swing.JLabel();
        Des5 = new javax.swing.JLabel();
        Des6 = new javax.swing.JLabel();
        Des7 = new javax.swing.JLabel();
        Des8 = new javax.swing.JLabel();
        Des9 = new javax.swing.JLabel();
        Des10 = new javax.swing.JLabel();
        Des11 = new javax.swing.JLabel();
        Des12 = new javax.swing.JLabel();
        Des13 = new javax.swing.JLabel();
        Des14 = new javax.swing.JLabel();

        setDefaultCloseOperation(javax.swing.WindowConstants.EXIT_ON_CLOSE);
        setResizable(false);

        Right.setBackground(new java.awt.Color(204, 204, 204));
        Right.setPreferredSize(new java.awt.Dimension(800, 500));

        Name1.setFont(new java.awt.Font("SansSerif", 1, 10)); // NOI18N
        Name1.setForeground(new java.awt.Color(0, 103, 103));
        Name1.setText(" Prof. Randeep Kahlon");
        Name1.setPreferredSize(new java.awt.Dimension(220, 20));

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

        Name2.setFont(new java.awt.Font("SansSerif", 1, 10)); // NOI18N
        Name2.setForeground(new java.awt.Color(0, 103, 103));
        Name2.setText(" Shubham Sanjay Patil (GL)");
        Name2.setPreferredSize(new java.awt.Dimension(220, 20));

        Name3.setFont(new java.awt.Font("SansSerif", 1, 10)); // NOI18N
        Name3.setForeground(new java.awt.Color(0, 103, 103));
        Name3.setText(" Atharva Rajendra Patil");
        Name3.setPreferredSize(new java.awt.Dimension(220, 20));

        Prof1.setHorizontalAlignment(javax.swing.SwingConstants.CENTER);
        Prof1.setIcon(new javax.swing.ImageIcon(getClass().getResource("/Profile.jpg"))); // NOI18N

        Prof2.setHorizontalAlignment(javax.swing.SwingConstants.CENTER);
        Prof2.setIcon(new javax.swing.ImageIcon(getClass().getResource("/Profile.jpg"))); // NOI18N

        Prof3.setHorizontalAlignment(javax.swing.SwingConstants.CENTER);
        Prof3.setIcon(new javax.swing.ImageIcon(getClass().getResource("/Profile.jpg"))); // NOI18N

        Prof4.setHorizontalAlignment(javax.swing.SwingConstants.CENTER);
        Prof4.setIcon(new javax.swing.ImageIcon(getClass().getResource("/Profile.jpg"))); // NOI18N

        Prof5.setHorizontalAlignment(javax.swing.SwingConstants.CENTER);
        Prof5.setIcon(new javax.swing.ImageIcon(getClass().getResource("/Profile.jpg"))); // NOI18N

        Name4.setFont(new java.awt.Font("SansSerif", 1, 10)); // NOI18N
        Name4.setForeground(new java.awt.Color(0, 103, 103));
        Name4.setText(" Subodh Sanjay Rokade");
        Name4.setPreferredSize(new java.awt.Dimension(220, 20));

        Name5.setFont(new java.awt.Font("SansSerif", 1, 10)); // NOI18N
        Name5.setForeground(new java.awt.Color(0, 103, 103));
        Name5.setText(" Amit Sudhakar Pawar");
        Name5.setPreferredSize(new java.awt.Dimension(220, 20));

        Des1.setFont(new java.awt.Font("SansSerif", 0, 8)); // NOI18N
        Des1.setForeground(new java.awt.Color(0, 103, 103));
        Des1.setText(" Mis. Randeep Kahlon mam have help us alot for making this ");
        Des1.setPreferredSize(new java.awt.Dimension(220, 8));

        Des2.setFont(new java.awt.Font("SansSerif", 0, 8)); // NOI18N
        Des2.setForeground(new java.awt.Color(0, 103, 103));
        Des2.setText(" project and under there best guideliness we have securly make  ");
        Des2.setPreferredSize(new java.awt.Dimension(220, 8));

        Des3.setFont(new java.awt.Font("SansSerif", 0, 8)); // NOI18N
        Des3.setForeground(new java.awt.Color(0, 103, 103));
        Des3.setText(" this game. ");
        Des3.setPreferredSize(new java.awt.Dimension(220, 8));

        Des4.setFont(new java.awt.Font("SansSerif", 0, 8)); // NOI18N
        Des4.setForeground(new java.awt.Color(0, 103, 103));
        Des4.setText(" With his best leadership skills and some good knowledge about ");
        Des4.setPreferredSize(new java.awt.Dimension(220, 8));

        Des5.setFont(new java.awt.Font("SansSerif", 0, 8)); // NOI18N
        Des5.setForeground(new java.awt.Color(0, 103, 103));
        Des5.setText(" programming he showed a big role in making this project a ");
        Des5.setPreferredSize(new java.awt.Dimension(220, 8));

        Des6.setFont(new java.awt.Font("SansSerif", 0, 8)); // NOI18N
        Des6.setForeground(new java.awt.Color(0, 103, 103));
        Des6.setText(" success. ");
        Des6.setPreferredSize(new java.awt.Dimension(220, 8));

        Des7.setFont(new java.awt.Font("SansSerif", 0, 8)); // NOI18N
        Des7.setForeground(new java.awt.Color(0, 103, 103));
        Des7.setText(" With his outstanding design skill for the frontend even in a language like java");
        Des7.setPreferredSize(new java.awt.Dimension(220, 8));

        Des8.setFont(new java.awt.Font("SansSerif", 0, 8)); // NOI18N
        Des8.setForeground(new java.awt.Color(0, 103, 103));
        Des8.setText(" language like java which not have much as a design interface though using GUI he made ");
        Des8.setPreferredSize(new java.awt.Dimension(220, 8));

        Des9.setFont(new java.awt.Font("SansSerif", 0, 8)); // NOI18N
        Des9.setForeground(new java.awt.Color(0, 103, 103));
        Des9.setText(" though using GUI he made a good running game.");
        Des9.setPreferredSize(new java.awt.Dimension(220, 8));

        Des10.setFont(new java.awt.Font("SansSerif", 0, 8)); // NOI18N
        Des10.setForeground(new java.awt.Color(0, 103, 103));
        Des10.setText(" With skills like subodh whose expert in database and userhandling");
        Des10.setPreferredSize(new java.awt.Dimension(220, 8));

        Des11.setFont(new java.awt.Font("SansSerif", 0, 8)); // NOI18N
        Des11.setForeground(new java.awt.Color(0, 103, 103));
        Des11.setText(" codes he give the project a main aset through his skills.");
        Des11.setPreferredSize(new java.awt.Dimension(220, 8));

        Des12.setFont(new java.awt.Font("SansSerif", 0, 8)); // NOI18N
        Des12.setForeground(new java.awt.Color(0, 103, 103));
        Des12.setText(" Our last but not list the tester who test the game and give us  ");
        Des12.setPreferredSize(new java.awt.Dimension(220, 8));

        Des13.setFont(new java.awt.Font("SansSerif", 0, 8)); // NOI18N
        Des13.setForeground(new java.awt.Color(0, 103, 103));
        Des13.setText(" many ideas and bugs which he finds in the game so other member\n");
        Des13.setPreferredSize(new java.awt.Dimension(220, 8));

        Des14.setFont(new java.awt.Font("SansSerif", 0, 8)); // NOI18N
        Des14.setForeground(new java.awt.Color(0, 103, 103));
        Des14.setText(" could solve those bugs.");
        Des14.setPreferredSize(new java.awt.Dimension(220, 8));

        javax.swing.GroupLayout RightLayout = new javax.swing.GroupLayout(Right);
        Right.setLayout(RightLayout);
        RightLayout.setHorizontalGroup(
            RightLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(RightLayout.createSequentialGroup()
                .addComponent(jPanel1, javax.swing.GroupLayout.PREFERRED_SIZE, 409, Short.MAX_VALUE)
                .addGap(66, 66, 66)
                .addGroup(RightLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.TRAILING)
                    .addComponent(Backbtn, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addGroup(RightLayout.createSequentialGroup()
                        .addGroup(RightLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                            .addComponent(Prof1, javax.swing.GroupLayout.PREFERRED_SIZE, 50, javax.swing.GroupLayout.PREFERRED_SIZE)
                            .addComponent(Prof2, javax.swing.GroupLayout.PREFERRED_SIZE, 50, javax.swing.GroupLayout.PREFERRED_SIZE)
                            .addComponent(Prof3, javax.swing.GroupLayout.PREFERRED_SIZE, 50, javax.swing.GroupLayout.PREFERRED_SIZE)
                            .addComponent(Prof4, javax.swing.GroupLayout.Alignment.TRAILING, javax.swing.GroupLayout.PREFERRED_SIZE, 50, javax.swing.GroupLayout.PREFERRED_SIZE)
                            .addComponent(Prof5, javax.swing.GroupLayout.Alignment.TRAILING, javax.swing.GroupLayout.PREFERRED_SIZE, 50, javax.swing.GroupLayout.PREFERRED_SIZE))
                        .addGroup(RightLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                            .addGroup(RightLayout.createSequentialGroup()
                                .addGap(20, 20, 20)
                                .addGroup(RightLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                    .addGroup(RightLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.TRAILING, false)
                                        .addComponent(Name1, javax.swing.GroupLayout.Alignment.LEADING, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                                        .addComponent(Name3, javax.swing.GroupLayout.Alignment.LEADING, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                                        .addComponent(Des1, javax.swing.GroupLayout.Alignment.LEADING, javax.swing.GroupLayout.PREFERRED_SIZE, 220, javax.swing.GroupLayout.PREFERRED_SIZE)
                                        .addComponent(Des2, javax.swing.GroupLayout.Alignment.LEADING, javax.swing.GroupLayout.PREFERRED_SIZE, 220, javax.swing.GroupLayout.PREFERRED_SIZE)
                                        .addComponent(Des3, javax.swing.GroupLayout.Alignment.LEADING, javax.swing.GroupLayout.PREFERRED_SIZE, 220, javax.swing.GroupLayout.PREFERRED_SIZE))
                                    .addComponent(Name5, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                                    .addComponent(Name2, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                                    .addComponent(Des4, javax.swing.GroupLayout.PREFERRED_SIZE, 220, javax.swing.GroupLayout.PREFERRED_SIZE)
                                    .addComponent(Des5, javax.swing.GroupLayout.PREFERRED_SIZE, 220, javax.swing.GroupLayout.PREFERRED_SIZE)
                                    .addComponent(Des6, javax.swing.GroupLayout.PREFERRED_SIZE, 220, javax.swing.GroupLayout.PREFERRED_SIZE)
                                    .addComponent(Des7, javax.swing.GroupLayout.PREFERRED_SIZE, 220, javax.swing.GroupLayout.PREFERRED_SIZE)
                                    .addComponent(Des8, javax.swing.GroupLayout.PREFERRED_SIZE, 220, javax.swing.GroupLayout.PREFERRED_SIZE)
                                    .addComponent(Des9, javax.swing.GroupLayout.PREFERRED_SIZE, 220, javax.swing.GroupLayout.PREFERRED_SIZE)))
                            .addGroup(RightLayout.createSequentialGroup()
                                .addGap(18, 18, 18)
                                .addComponent(Name4, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))
                            .addGroup(RightLayout.createSequentialGroup()
                                .addGap(20, 20, 20)
                                .addComponent(Des10, javax.swing.GroupLayout.PREFERRED_SIZE, 220, javax.swing.GroupLayout.PREFERRED_SIZE))
                            .addGroup(RightLayout.createSequentialGroup()
                                .addGap(20, 20, 20)
                                .addComponent(Des11, javax.swing.GroupLayout.PREFERRED_SIZE, 220, javax.swing.GroupLayout.PREFERRED_SIZE))
                            .addGroup(RightLayout.createSequentialGroup()
                                .addGap(20, 20, 20)
                                .addComponent(Des12, javax.swing.GroupLayout.PREFERRED_SIZE, 220, javax.swing.GroupLayout.PREFERRED_SIZE))
                            .addGroup(RightLayout.createSequentialGroup()
                                .addGap(20, 20, 20)
                                .addComponent(Des13, javax.swing.GroupLayout.PREFERRED_SIZE, 220, javax.swing.GroupLayout.PREFERRED_SIZE))
                            .addGroup(RightLayout.createSequentialGroup()
                                .addGap(20, 20, 20)
                                .addComponent(Des14, javax.swing.GroupLayout.PREFERRED_SIZE, 220, javax.swing.GroupLayout.PREFERRED_SIZE)))))
                .addGap(35, 35, 35))
        );
        RightLayout.setVerticalGroup(
            RightLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(RightLayout.createSequentialGroup()
                .addGroup(RightLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addGroup(RightLayout.createSequentialGroup()
                        .addGap(40, 40, 40)
                        .addGroup(RightLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                            .addGroup(RightLayout.createSequentialGroup()
                                .addComponent(Prof1, javax.swing.GroupLayout.PREFERRED_SIZE, 50, javax.swing.GroupLayout.PREFERRED_SIZE)
                                .addGap(30, 30, 30)
                                .addGroup(RightLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                    .addComponent(Prof2, javax.swing.GroupLayout.PREFERRED_SIZE, 50, javax.swing.GroupLayout.PREFERRED_SIZE)
                                    .addGroup(RightLayout.createSequentialGroup()
                                        .addComponent(Name2, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                                        .addGap(0, 0, 0)
                                        .addComponent(Des4, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                                        .addGap(0, 0, 0)
                                        .addComponent(Des5, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                                        .addGap(0, 0, 0)
                                        .addComponent(Des6, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))))
                            .addGroup(RightLayout.createSequentialGroup()
                                .addComponent(Name1, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                                .addGap(0, 0, 0)
                                .addComponent(Des1, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                                .addGap(0, 0, 0)
                                .addComponent(Des2, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                                .addGap(0, 0, 0)
                                .addComponent(Des3, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)))
                        .addGap(30, 30, 30)
                        .addGroup(RightLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                            .addComponent(Prof3, javax.swing.GroupLayout.PREFERRED_SIZE, 50, javax.swing.GroupLayout.PREFERRED_SIZE)
                            .addGroup(RightLayout.createSequentialGroup()
                                .addComponent(Name3, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                                .addGap(0, 0, 0)
                                .addComponent(Des7, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                                .addGap(0, 0, 0)
                                .addComponent(Des8, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                                .addGap(0, 0, 0)
                                .addComponent(Des9, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)))
                        .addGap(30, 30, 30)
                        .addGroup(RightLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                            .addGroup(RightLayout.createSequentialGroup()
                                .addComponent(Name4, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                                .addGap(0, 0, 0)
                                .addComponent(Des10, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                                .addGap(0, 0, 0)
                                .addComponent(Des11, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))
                            .addComponent(Prof4, javax.swing.GroupLayout.Alignment.TRAILING, javax.swing.GroupLayout.PREFERRED_SIZE, 50, javax.swing.GroupLayout.PREFERRED_SIZE))
                        .addGap(30, 30, 30)
                        .addGroup(RightLayout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                            .addGroup(RightLayout.createSequentialGroup()
                                .addComponent(Name5, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                                .addGap(0, 0, 0)
                                .addComponent(Des12, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                                .addGap(0, 0, 0)
                                .addComponent(Des13, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                                .addGap(0, 0, 0)
                                .addComponent(Des14, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))
                            .addComponent(Prof5, javax.swing.GroupLayout.PREFERRED_SIZE, 50, javax.swing.GroupLayout.PREFERRED_SIZE))
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                        .addComponent(Backbtn, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))
                    .addComponent(jPanel1, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))
                .addContainerGap(javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE))
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
        Mainpage main = new Mainpage();
        main.setVisible(true);
        main.setLocationRelativeTo(null);
        main.pack();
        this.dispose();
        playSE(1);
    }//GEN-LAST:event_BackbtnActionPerformed

     public void playSE(int i){
        sound.setFile(i);
        sound.play();
    }
    

    // Variables declaration - do not modify//GEN-BEGIN:variables
    private javax.swing.JButton Backbtn;
    private javax.swing.JLabel Des1;
    private javax.swing.JLabel Des10;
    private javax.swing.JLabel Des11;
    private javax.swing.JLabel Des12;
    private javax.swing.JLabel Des13;
    private javax.swing.JLabel Des14;
    private javax.swing.JLabel Des2;
    private javax.swing.JLabel Des3;
    private javax.swing.JLabel Des4;
    private javax.swing.JLabel Des5;
    private javax.swing.JLabel Des6;
    private javax.swing.JLabel Des7;
    private javax.swing.JLabel Des8;
    private javax.swing.JLabel Des9;
    private javax.swing.JLabel Logoimg;
    private javax.swing.JLabel Name1;
    private javax.swing.JLabel Name2;
    private javax.swing.JLabel Name3;
    private javax.swing.JLabel Name4;
    private javax.swing.JLabel Name5;
    private javax.swing.JLabel Prof1;
    private javax.swing.JLabel Prof2;
    private javax.swing.JLabel Prof3;
    private javax.swing.JLabel Prof4;
    private javax.swing.JLabel Prof5;
    private javax.swing.JPanel Right;
    private javax.swing.JPanel jPanel1;
    private javax.swing.JLabel logoText;
    // End of variables declaration//GEN-END:variables
}
