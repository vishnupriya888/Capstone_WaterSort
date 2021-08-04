var jan, feb;
var water = [];
var month = [];
function preload() {
  zero_img = loadImage("0.png");
  one_img = loadImage("1.png");
  two_img = loadImage("2.png");
  three_img = loadImage("3.png");
  four_img = loadImage("4.png");
  five_img = loadImage("5.png");
  six_img = loadImage("6.png");
  seven_img = loadImage("7.png");
  eight_img = loadImage("8.png");
  nine_img = loadImage("9.png");
}
function setup() {
  createCanvas(1900, 600);
  january = createSprite(100, 220, 20, 220);
  january.addImage("one_img", one_img);
  january.scale = 0.35;
  february = createSprite(250, 220, 20, 220);
  february.addImage("one_img", one_img);
  february.scale = 0.35;
  march = createSprite(400, 220, 20, 220);
  march.addImage("one_img", one_img);
  march.scale = 0.35;
  april = createSprite(550, 220, 20, 220);
  april.addImage("one_img", one_img);
  april.scale = 0.35;
  may = createSprite(700, 220, 20, 220);
  may.addImage("one_img", one_img);
  may.scale = 0.35;
  june = createSprite(850, 220, 20, 220);
  june.addImage("one_img", one_img);
  june.scale = 0.35;
  july = createSprite(1000, 220, 20, 220);
  july.addImage("one_img", one_img);
  july.scale = 0.35;
  august = createSprite(1150, 220, 20, 220);
  august.addImage("one_img", one_img);
  august.scale = 0.35;
  september = createSprite(1300, 220, 20, 220);
  september.addImage("one_img", one_img);
  september.scale = 0.35;
  october = createSprite(1450, 220, 20, 220);
  october.addImage("one_img", one_img);
  october.scale = 0.35;
  november = createSprite(1600, 220, 20, 220);
  november.addImage("one_img", one_img);
  november.scale = 0.35;
  december = createSprite(1750, 220, 20, 220);
  december.addImage("one_img", one_img);
  december.scale = 0.35;

  tube1 = createInput();
  tube1.position(200, 500);
  tube2 = createInput();
  tube2.position(400, 500);

  remove = createInput();
  remove.position(600, 500);
  check = createButton("CHECK");
  check.position(950, 500);
  half = createButton("HALF");
  half.position(1250, 500);

  water = [0, 30, 10, 50, 50, 70, 70, 40, 40, 20, 30, 90];
  month = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
}
function draw() {
  background("pink");
  drawSprites();

  month1 = tube1.value();
  month2 = tube2.value();
  amount = remove.value();
  textSize(20);
  fill("black");
  text("January - 1", 80, 400);
  text("February - 2", 220, 400);
  text("March - 3", 380, 400);
  text("April - 4", 540, 400);
  text("May - 5", 700, 400);
  text("June - 6", 840, 400);
  text("July - 7", 990, 400);
  text("August - 8", 1130, 400);
  text("September - 9", 1260, 400);
  text("October - 10", 1420, 400);
  text("November - 11", 1560, 400);
  text("December - 12", 1700, 400);

  // console.log(month1, month2, amount);

  animate();

  check.mousePressed(move);
  half.mousePressed(half_move);
}
function half_move() {
  month1 = int(month1);
  month2 = int(month2);
  month12 = int(month1) - 1;
  month22 = int(month2) - 1;
  half2 = water[month12] / 2;
  total = water[month22] + half2;
  total2 = water[month12] - half2;
  water[month22] = total;
  water[month12] = total2;
  // total = water[month12] + water[month22];
  // water[month12] = total / 2;
  // water[month22] = total / 2;
  console.log(total2, total);
}
function animate() {
  month1 = int(month1);
  month2 = int(month2);
  if (water[0] <= 0) {
    january.addImage("zero_img", zero_img);
    january.changeImage("zero_img", zero_img);
  } else if (water[0] > 0 && water[0] < 10) {
    january.addImage("one_img", one_img);
    january.changeImage("one_img", one_img);
  } else if (water[0] >= 10 && water[0] < 20) {
    january.addImage("two_img", two_img);
    january.changeImage("two_img", two_img);
  } else if (water[0] >= 20 && water[0] < 30) {
    january.addImage("three_img", three_img);
    january.changeImage("three_img", three_img);
  } else if (water[0] >= 30 && water[0] < 40) {
    january.addImage("four_img", four_img);
    january.changeImage("four_img", four_img);
  } else if (water[0] >= 40 && water[0] < 50) {
    january.addImage("five_img", five_img);
    january.changeImage("five_img", five_img);
  } else if (water[0] >= 50 && water[0] < 60) {
    january.addImage("six_img", six_img);
    january.changeImage("six_img", six_img);
  } else if (water[0] >= 60 && water[0] < 70) {
    january.addImage("seven_img", seven_img);
    january.changeImage("seven_img", seven_img);
  } else if (water[0] >= 70 && water[0] < 80) {
    january.addImage("eight_img", eight_img);
    january.changeImage("eight_img", eight_img);
  } else if (water[0] >= 80 && water[0] < 90) {
    january.addImage("nine_img", nine_img);
    january.changeImage("nine_img", nine_img);
  } else {
    january.addImage("nine_img", nine_img);
    january.changeImage("nine_img", nine_img);
  }
  if (water[1] <= 0) {
    february.addImage("zero_img", zero_img);
    february.changeImage("zero_img", zero_img);
  } else if (water[1] > 0 && water[1] < 10) {
    february.addImage("one_img", one_img);
    february.changeImage("one_img", one_img);
  } else if (water[1] >= 10 && water[1] < 20) {
    february.addImage("two_img", two_img);
    february.changeImage("two_img", two_img);
  } else if (water[1] >= 20 && water[1] < 30) {
    february.addImage("three_img", three_img);
    february.changeImage("three_img", three_img);
  } else if (water[1] >= 30 && water[1] < 40) {
    february.addImage("four_img", four_img);
    february.changeImage("four_img", four_img);
  } else if (water[1] >= 40 && water[1] < 50) {
    february.addImage("five_img", five_img);
    february.changeImage("five_img", five_img);
  } else if (water[1] >= 50 && water[1] < 60) {
    february.addImage("six_img", six_img);
    february.changeImage("six_img", six_img);
  } else if (water[1] >= 60 && water[1] < 70) {
    february.addImage("seven_img", seven_img);
    february.changeImage("seven_img", seven_img);
  } else if (water[1] >= 70 && water[1] < 80) {
    february.addImage("eight_img", eight_img);
    february.changeImage("eight_img", eight_img);
  } else if (water[1] >= 80 && water[1] < 90) {
    february.addImage("nine_img", nine_img);
    february.changeImage("nine_img", nine_img);
  } else {
    february.addImage("nine_img", nine_img);
    february.changeImage("nine_img", nine_img);
  }
  if (water[2] <= 0) {
    march.addImage("zero_img", zero_img);
    march.changeImage("zero_img", zero_img);
  } else if (water[2] > 0 && water[2] < 10) {
    march.addImage("one_img", one_img);
    march.changeImage("one_img", one_img);
  } else if (water[2] >= 10 && water[2] < 20) {
    march.addImage("two_img", two_img);
    march.changeImage("two_img", two_img);
  } else if (water[2] >= 20 && water[2] < 30) {
    march.addImage("three_img", three_img);
    march.changeImage("three_img", three_img);
  } else if (water[2] >= 30 && water[2] < 40) {
    march.addImage("four_img", four_img);
    march.changeImage("four_img", four_img);
  } else if (water[2] >= 40 && water[2] < 50) {
    march.addImage("five_img", five_img);
    march.changeImage("five_img", five_img);
  } else if (water[2] >= 50 && water[2] < 60) {
    march.addImage("six_img", six_img);
    march.changeImage("six_img", six_img);
  } else if (water[2] >= 60 && water[2] < 70) {
    march.addImage("seven_img", seven_img);
    march.changeImage("seven_img", seven_img);
  } else if (water[2] >= 70 && water[2] < 80) {
    march.addImage("eight_img", eight_img);
    march.changeImage("eight_img", eight_img);
  } else if (water[2] >= 80 && water[2] < 90) {
    march.addImage("nine_img", nine_img);
    march.changeImage("nine_img", nine_img);
  } else {
    march.addImage("nine_img", nine_img);
    march.changeImage("nine_img", nine_img);
  }
  if (water[3] <= 0) {
    april.addImage("zero_img", zero_img);
    april.changeImage("zero_img", zero_img);
  } else if (water[3] > 0 && water[3] < 10) {
    april.addImage("one_img", one_img);
    april.changeImage("one_img", one_img);
  } else if (water[3] >= 10 && water[3] < 20) {
    april.addImage("two_img", two_img);
    april.changeImage("two_img", two_img);
  } else if (water[3] >= 20 && water[3] < 30) {
    april.addImage("three_img", three_img);
    april.changeImage("three_img", three_img);
  } else if (water[3] >= 30 && water[3] < 40) {
    april.addImage("four_img", four_img);
    april.changeImage("four_img", four_img);
  } else if (water[3] >= 40 && water[3] < 50) {
    april.addImage("five_img", five_img);
    april.changeImage("five_img", five_img);
  } else if (water[3] >= 50 && water[3] < 60) {
    april.addImage("six_img", six_img);
    april.changeImage("six_img", six_img);
  } else if (water[3] >= 60 && water[3] < 70) {
    april.addImage("seven_img", seven_img);
    april.changeImage("seven_img", seven_img);
  } else if (water[3] >= 70 && water[3] < 80) {
    april.addImage("eight_img", eight_img);
    april.changeImage("eight_img", eight_img);
  } else if (water[3] >= 80 && water[3] < 90) {
    april.addImage("nine_img", nine_img);
    april.changeImage("nine_img", nine_img);
  } else {
    april.addImage("nine_img", nine_img);
    april.changeImage("nine_img", nine_img);
  }
  if (water[4] <= 0) {
    may.addImage("zero_img", zero_img);
    may.changeImage("zero_img", zero_img);
  } else if (water[4] > 0 && water[4] < 10) {
    may.addImage("one_img", one_img);
    may.changeImage("one_img", one_img);
  } else if (water[4] >= 10 && water[4] < 20) {
    may.addImage("two_img", two_img);
    may.changeImage("two_img", two_img);
  } else if (water[4] >= 20 && water[4] < 30) {
    may.addImage("three_img", three_img);
    may.changeImage("three_img", three_img);
  } else if (water[4] >= 30 && water[4] < 40) {
    may.addImage("four_img", four_img);
    may.changeImage("four_img", four_img);
  } else if (water[4] >= 40 && water[4] < 50) {
    may.addImage("five_img", five_img);
    may.changeImage("five_img", five_img);
  } else if (water[4] >= 50 && water[4] < 60) {
    may.addImage("six_img", six_img);
    may.changeImage("six_img", six_img);
  } else if (water[4] >= 60 && water[4] < 70) {
    may.addImage("seven_img", seven_img);
    may.changeImage("seven_img", seven_img);
  } else if (water[4] >= 70 && water[4] < 80) {
    may.addImage("eight_img", eight_img);
    may.changeImage("eight_img", eight_img);
  } else if (water[4] >= 80 && water[4] < 90) {
    may.addImage("nine_img", nine_img);
    may.changeImage("nine_img", nine_img);
  } else {
    may.addImage("nine_img", nine_img);
    may.changeImage("nine_img", nine_img);
  }
  if (water[5] <= 0) {
    june.addImage("zero_img", zero_img);
    june.changeImage("zero_img", zero_img);
  } else if (water[5] > 0 && water[5] < 10) {
    june.addImage("one_img", one_img);
    june.changeImage("one_img", one_img);
  } else if (water[5] >= 10 && water[5] < 20) {
    june.addImage("two_img", two_img);
    june.changeImage("two_img", two_img);
  } else if (water[5] >= 20 && water[5] < 30) {
    june.addImage("three_img", three_img);
    june.changeImage("three_img", three_img);
  } else if (water[5] >= 30 && water[5] < 40) {
    june.addImage("four_img", four_img);
    june.changeImage("four_img", four_img);
  } else if (water[5] >= 40 && water[5] < 50) {
    june.addImage("five_img", five_img);
    june.changeImage("five_img", five_img);
  } else if (water[5] >= 50 && water[5] < 60) {
    june.addImage("six_img", six_img);
    june.changeImage("six_img", six_img);
  } else if (water[5] >= 60 && water[5] < 70) {
    june.addImage("seven_img", seven_img);
    june.changeImage("seven_img", seven_img);
  } else if (water[5] >= 70 && water[5] < 80) {
    june.addImage("eight_img", eight_img);
    june.changeImage("eight_img", eight_img);
  } else if (water[5] >= 80 && water[5] < 90) {
    june.addImage("nine_img", nine_img);
    june.changeImage("nine_img", nine_img);
  } else {
    june.addImage("nine_img", nine_img);
    june.changeImage("nine_img", nine_img);
  }
  if (water[6] <= 0) {
    july.addImage("zero_img", zero_img);
    july.changeImage("zero_img", zero_img);
  } else if (water[6] > 0 && water[6] < 10) {
    july.addImage("one_img", one_img);
    july.changeImage("one_img", one_img);
  } else if (water[6] >= 10 && water[6] < 20) {
    july.addImage("two_img", two_img);
    july.changeImage("two_img", two_img);
  } else if (water[6] >= 20 && water[6] < 30) {
    july.addImage("three_img", three_img);
    july.changeImage("three_img", three_img);
  } else if (water[6] >= 30 && water[6] < 40) {
    july.addImage("four_img", four_img);
    july.changeImage("four_img", four_img);
  } else if (water[6] >= 40 && water[6] < 50) {
    july.addImage("five_img", five_img);
    july.changeImage("five_img", five_img);
  } else if (water[6] >= 50 && water[6] < 60) {
    july.addImage("six_img", six_img);
    july.changeImage("six_img", six_img);
  } else if (water[6] >= 60 && water[6] < 70) {
    july.addImage("seven_img", seven_img);
    july.changeImage("seven_img", seven_img);
  } else if (water[6] >= 70 && water[6] < 80) {
    july.addImage("eight_img", eight_img);
    july.changeImage("eight_img", eight_img);
  } else if (water[6] >= 80 && water[6] < 90) {
    july.addImage("nine_img", nine_img);
    july.changeImage("nine_img", nine_img);
  } else {
    july.addImage("nine_img", nine_img);
    july.changeImage("nine_img", nine_img);
  }
  if (water[7] <= 0) {
    august.addImage("zero_img", zero_img);
    august.changeImage("zero_img", zero_img);
  } else if (water[7] > 0 && water[7] < 10) {
    august.addImage("one_img", one_img);
    august.changeImage("one_img", one_img);
  } else if (water[7] >= 10 && water[7] < 20) {
    august.addImage("two_img", two_img);
    august.changeImage("two_img", two_img);
  } else if (water[7] >= 20 && water[7] < 30) {
    august.addImage("three_img", three_img);
    august.changeImage("three_img", three_img);
  } else if (water[7] >= 30 && water[7] < 40) {
    august.addImage("four_img", four_img);
    august.changeImage("four_img", four_img);
  } else if (water[7] >= 40 && water[7] < 50) {
    august.addImage("five_img", five_img);
    august.changeImage("five_img", five_img);
  } else if (water[7] >= 50 && water[7] < 60) {
    august.addImage("six_img", six_img);
    august.changeImage("six_img", six_img);
  } else if (water[7] >= 60 && water[7] < 70) {
    august.addImage("seven_img", seven_img);
    august.changeImage("seven_img", seven_img);
  } else if (water[7] >= 70 && water[7] < 80) {
    august.addImage("eight_img", eight_img);
    august.changeImage("eight_img", eight_img);
  } else if (water[7] >= 80 && water[7] < 90) {
    august.addImage("nine_img", nine_img);
    august.changeImage("nine_img", nine_img);
  } else {
    august.addImage("nine_img", nine_img);
    august.changeImage("nine_img", nine_img);
  }
  if (water[8] <= 0) {
    september.addImage("zero_img", zero_img);
    september.changeImage("zero_img", zero_img);
  } else if (water[8] > 0 && water[8] < 10) {
    september.addImage("one_img", one_img);
    september.changeImage("one_img", one_img);
  } else if (water[8] >= 10 && water[8] < 20) {
    september.addImage("two_img", two_img);
    september.changeImage("two_img", two_img);
  } else if (water[8] >= 20 && water[8] < 30) {
    september.addImage("three_img", three_img);
    september.changeImage("three_img", three_img);
  } else if (water[8] >= 30 && water[8] < 40) {
    september.addImage("four_img", four_img);
    september.changeImage("four_img", four_img);
  } else if (water[8] >= 40 && water[8] < 50) {
    september.addImage("five_img", five_img);
    september.changeImage("five_img", five_img);
  } else if (water[8] >= 50 && water[8] < 60) {
    september.addImage("six_img", six_img);
    september.changeImage("six_img", six_img);
  } else if (water[8] >= 60 && water[8] < 70) {
    september.addImage("seven_img", seven_img);
    september.changeImage("seven_img", seven_img);
  } else if (water[8] >= 70 && water[8] < 80) {
    september.addImage("eight_img", eight_img);
    september.changeImage("eight_img", eight_img);
  } else if (water[8] >= 80 && water[8] < 90) {
    september.addImage("nine_img", nine_img);
    september.changeImage("nine_img", nine_img);
  } else {
    september.addImage("nine_img", nine_img);
    september.changeImage("nine_img", nine_img);
  }
  if (water[9] <= 0) {
    october.addImage("zero_img", zero_img);
    october.changeImage("zero_img", zero_img);
  } else if (water[9] > 0 && water[9] < 10) {
    october.addImage("one_img", one_img);
    october.changeImage("one_img", one_img);
  } else if (water[9] >= 10 && water[9] < 20) {
    october.addImage("two_img", two_img);
    october.changeImage("two_img", two_img);
  } else if (water[9] >= 20 && water[9] < 30) {
    october.addImage("three_img", three_img);
    october.changeImage("three_img", three_img);
  } else if (water[9] >= 30 && water[9] < 40) {
    october.addImage("four_img", four_img);
    october.changeImage("four_img", four_img);
  } else if (water[9] >= 40 && water[9] < 50) {
    october.addImage("five_img", five_img);
    october.changeImage("five_img", five_img);
  } else if (water[9] >= 50 && water[9] < 60) {
    october.addImage("six_img", six_img);
    october.changeImage("six_img", six_img);
  } else if (water[9] >= 60 && water[9] < 70) {
    october.addImage("seven_img", seven_img);
    october.changeImage("seven_img", seven_img);
  } else if (water[9] >= 70 && water[9] < 80) {
    october.addImage("eight_img", eight_img);
    october.changeImage("eight_img", eight_img);
  } else if (water[9] >= 80 && water[9] < 90) {
    october.addImage("nine_img", nine_img);
    october.changeImage("nine_img", nine_img);
  } else {
    october.addImage("nine_img", nine_img);
    october.changeImage("nine_img", nine_img);
  }
  if (water[10] <= 0) {
    november.addImage("zero_img", zero_img);
    november.changeImage("zero_img", zero_img);
  } else if (water[10] > 0 && water[10] < 10) {
    november.addImage("one_img", one_img);
    november.changeImage("one_img", one_img);
  } else if (water[10] >= 10 && water[10] < 20) {
    november.addImage("two_img", two_img);
    november.changeImage("two_img", two_img);
  } else if (water[10] >= 20 && water[10] < 30) {
    november.addImage("three_img", three_img);
    november.changeImage("three_img", three_img);
  } else if (water[10] >= 30 && water[10] < 40) {
    november.addImage("four_img", four_img);
    november.changeImage("four_img", four_img);
  } else if (water[10] >= 40 && water[10] < 50) {
    november.addImage("five_img", five_img);
    november.changeImage("five_img", five_img);
  } else if (water[10] >= 50 && water[10] < 60) {
    november.addImage("six_img", six_img);
    november.changeImage("six_img", six_img);
  } else if (water[10] >= 60 && water[10] < 70) {
    november.addImage("seven_img", seven_img);
    november.changeImage("seven_img", seven_img);
  } else if (water[10] >= 70 && water[10] < 80) {
    november.addImage("eight_img", eight_img);
    november.changeImage("eight_img", eight_img);
  } else if (water[10] >= 80 && water[10] < 90) {
    november.addImage("nine_img", nine_img);
    november.changeImage("nine_img", nine_img);
  } else {
    november.addImage("nine_img", nine_img);
    november.changeImage("nine_img", nine_img);
  }
  if (water[11] <= 0) {
    december.addImage("zero_img", zero_img);
    december.changeImage("zero_img", zero_img);
  } else if (water[11] > 0 && water[11] < 10) {
    december.addImage("one_img", one_img);
    december.changeImage("one_img", one_img);
  } else if (water[11] >= 10 && water[11] < 20) {
    december.addImage("two_img", two_img);
    december.changeImage("two_img", two_img);
  } else if (water[11] >= 20 && water[11] < 30) {
    december.addImage("three_img", three_img);
    december.changeImage("three_img", three_img);
  } else if (water[11] >= 30 && water[11] < 40) {
    december.addImage("four_img", four_img);
    december.changeImage("four_img", four_img);
  } else if (water[11] >= 40 && water[11] < 50) {
    december.addImage("five_img", five_img);
    december.changeImage("five_img", five_img);
  } else if (water[11] >= 50 && water[11] < 60) {
    december.addImage("six_img", six_img);
    december.changeImage("six_img", six_img);
  } else if (water[11] >= 60 && water[11] < 70) {
    december.addImage("seven_img", seven_img);
    december.changeImage("seven_img", seven_img);
  } else if (water[11] >= 70 && water[11] < 80) {
    december.addImage("eight_img", eight_img);
    december.changeImage("eight_img", eight_img);
  } else if (water[11] >= 80 && water[11] < 90) {
    december.addImage("nine_img", nine_img);
    december.changeImage("nine_img", nine_img);
  } else {
    december.addImage("nine_img", nine_img);
    december.changeImage("nine_img", nine_img);
  }
}
function move() {
  month1 = int(month1);
  month2 = int(month2);
  switch (month1) {
    case 1:
      water[0] = water[0] - int(amount);
      console.log(month1);
      switch (month2) {
        case 1:
          water[0] = water[0] + int(amount);
          break;
        case 2:
          water[1] = water[1] + int(amount);
          break;
        case 3:
          water[2] = water[2] + int(amount);
          break;
        case 4:
          water[3] = water[3] + int(amount);
          break;
        case 5:
          water[4] = water[4] + int(amount);
          break;
        case 6:
          water[5] = water[5] + int(amount);
          break;
        case 7:
          water[6] = water[6] + int(amount);
          break;
        case 8:
          water[7] = water[7] + int(amount);
          break;
        case 9:
          water[8] = water[8] + int(amount);
          break;
        case 10:
          water[9] = water[9] + int(amount);
          break;
        case 11:
          water[10] = water[10] + int(amount);
          break;
        case 12:
          water[11] = water[11] + int(amount);
          break;
        default:
          break;
      }
      break;
    case 2:
      water[1] = water[1] - int(amount);
      switch (month2) {
        case 1:
          water[0] = water[0] + int(amount);
          break;
        case 2:
          water[1] = water[1] + int(amount);
          break;
        case 3:
          water[2] = water[2] + int(amount);
          break;
        case 4:
          water[3] = water[3] + int(amount);
          break;
        case 5:
          water[4] = water[4] + int(amount);
          break;
        case 6:
          water[5] = water[5] + int(amount);
          break;
        case 7:
          water[6] = water[6] + int(amount);
          break;
        case 8:
          water[7] = water[7] + int(amount);
          break;
        case 9:
          water[8] = water[8] + int(amount);
          break;
        case 10:
          water[9] = water[9] + int(amount);
          break;
        case 11:
          water[10] = water[10] + int(amount);
          break;
        case 12:
          water[11] = water[11] + int(amount);
          break;
        default:
          break;
      }
      break;
    case 3:
      water[2] = water[2] - int(amount);
      switch (month2) {
        case 1:
          water[0] = water[0] + int(amount);
          break;
        case 2:
          water[1] = water[1] + int(amount);
          break;
        case 3:
          water[2] = water[2] + int(amount);
          break;
        case 4:
          water[3] = water[3] + int(amount);
          break;
        case 5:
          water[4] = water[4] + int(amount);
          break;
        case 6:
          water[5] = water[5] + int(amount);
          break;
        case 7:
          water[6] = water[6] + int(amount);
          break;
        case 8:
          water[7] = water[7] + int(amount);
          break;
        case 9:
          water[8] = water[8] + int(amount);
          break;
        case 10:
          water[9] = water[9] + int(amount);
          break;
        case 11:
          water[10] = water[10] + int(amount);
          break;
        case 12:
          water[11] = water[11] + int(amount);
          break;
        default:
          break;
      }
      break;
    case 4:
      water[3] = water[3] - int(amount);
      switch (month2) {
        case 1:
          water[0] = water[0] + int(amount);
          break;
        case 2:
          water[1] = water[1] + int(amount);
          break;
        case 3:
          water[2] = water[2] + int(amount);
          break;
        case 4:
          water[3] = water[3] + int(amount);
          break;
        case 5:
          water[4] = water[4] + int(amount);
          break;
        case 6:
          water[5] = water[5] + int(amount);
          break;
        case 7:
          water[6] = water[6] + int(amount);
          break;
        case 8:
          water[7] = water[7] + int(amount);
          break;
        case 9:
          water[8] = water[8] + int(amount);
          break;
        case 10:
          water[9] = water[9] + int(amount);
          break;
        case 11:
          water[10] = water[10] + int(amount);
          break;
        case 12:
          water[11] = water[11] + int(amount);
          break;
        default:
          break;
      }
      break;
    case 5:
      water[4] = water[4] - int(amount);
      switch (month2) {
        case 1:
          water[0] = water[0] + int(amount);
          break;
        case 2:
          water[1] = water[1] + int(amount);
          break;
        case 3:
          water[2] = water[2] + int(amount);
          break;
        case 4:
          water[3] = water[3] + int(amount);
          break;
        case 5:
          water[4] = water[4] + int(amount);
          break;
        case 6:
          water[5] = water[5] + int(amount);
          break;
        case 7:
          water[6] = water[6] + int(amount);
          break;
        case 8:
          water[7] = water[7] + int(amount);
          break;
        case 9:
          water[8] = water[8] + int(amount);
          break;
        case 10:
          water[9] = water[9] + int(amount);
          break;
        case 11:
          water[10] = water[10] + int(amount);
          break;
        case 12:
          water[11] = water[11] + int(amount);
          break;
        default:
          break;
      }
      break;
    case 6:
      water[5] = water[5] - int(amount);
      switch (month2) {
        case 1:
          water[0] = water[0] + int(amount);
          break;
        case 2:
          water[1] = water[1] + int(amount);
          break;
        case 3:
          water[2] = water[2] + int(amount);
          break;
        case 4:
          water[3] = water[3] + int(amount);
          break;
        case 5:
          water[4] = water[4] + int(amount);
          break;
        case 6:
          water[5] = water[5] + int(amount);
          break;
        case 7:
          water[6] = water[6] + int(amount);
          break;
        case 8:
          water[7] = water[7] + int(amount);
          break;
        case 9:
          water[8] = water[8] + int(amount);
          break;
        case 10:
          water[9] = water[9] + int(amount);
          break;
        case 11:
          water[10] = water[10] + int(amount);
          break;
        case 12:
          water[11] = water[11] + int(amount);
          break;
        default:
          break;
      }
      break;
    case 7:
      water[6] = water[6] - int(amount);
      switch (month2) {
        case 1:
          water[0] = water[0] + int(amount);
          break;
        case 2:
          water[1] = water[1] + int(amount);
          break;
        case 3:
          water[2] = water[2] + int(amount);
          break;
        case 4:
          water[3] = water[3] + int(amount);
          break;
        case 5:
          water[4] = water[4] + int(amount);
          break;
        case 6:
          water[5] = water[5] + int(amount);
          break;
        case 7:
          water[6] = water[6] + int(amount);
          break;
        case 8:
          water[7] = water[7] + int(amount);
          break;
        case 9:
          water[8] = water[8] + int(amount);
          break;
        case 10:
          water[9] = water[9] + int(amount);
          break;
        case 11:
          water[10] = water[10] + int(amount);
          break;
        case 12:
          water[11] = water[11] + int(amount);
          break;
        default:
          break;
      }
      break;
    case 8:
      water[7] = water[7] - int(amount);
      switch (month2) {
        case 1:
          water[0] = water[0] + int(amount);
          break;
        case 2:
          water[1] = water[1] + int(amount);
          break;
        case 3:
          water[2] = water[2] + int(amount);
          break;
        case 4:
          water[3] = water[3] + int(amount);
          break;
        case 5:
          water[4] = water[4] + int(amount);
          break;
        case 6:
          water[5] = water[5] + int(amount);
          break;
        case 7:
          water[6] = water[6] + int(amount);
          break;
        case 8:
          water[7] = water[7] + int(amount);
          break;
        case 9:
          water[8] = water[8] + int(amount);
          break;
        case 10:
          water[9] = water[9] + int(amount);
          break;
        case 11:
          water[10] = water[10] + int(amount);
          break;
        case 12:
          water[11] = water[11] + int(amount);
          break;
        default:
          break;
      }
      break;
    case 9:
      water[8] = water[8] - int(amount);
      switch (month2) {
        case 1:
          water[0] = water[0] + int(amount);
          break;
        case 2:
          water[1] = water[1] + int(amount);
          break;
        case 3:
          water[2] = water[2] + int(amount);
          break;
        case 4:
          water[3] = water[3] + int(amount);
          break;
        case 5:
          water[4] = water[4] + int(amount);
          break;
        case 6:
          water[5] = water[5] + int(amount);
          break;
        case 7:
          water[6] = water[6] + int(amount);
          break;
        case 8:
          water[7] = water[7] + int(amount);
          break;
        case 9:
          water[8] = water[8] + int(amount);
          break;
        case 10:
          water[9] = water[9] + int(amount);
          break;
        case 11:
          water[10] = water[10] + int(amount);
          break;
        case 12:
          water[11] = water[11] + int(amount);
          break;
        default:
          break;
      }
      break;
    case 10:
      water[9] = water[9] - int(amount);
      switch (month2) {
        case 1:
          water[0] = water[0] + int(amount);
          break;
        case 2:
          water[1] = water[1] + int(amount);
          break;
        case 3:
          water[2] = water[2] + int(amount);
          break;
        case 4:
          water[3] = water[3] + int(amount);
          break;
        case 5:
          water[4] = water[4] + int(amount);
          break;
        case 6:
          water[5] = water[5] + int(amount);
          break;
        case 7:
          water[6] = water[6] + int(amount);
          break;
        case 8:
          water[7] = water[7] + int(amount);
          break;
        case 9:
          water[8] = water[8] + int(amount);
          break;
        case 10:
          water[9] = water[9] + int(amount);
          break;
        case 11:
          water[10] = water[10] + int(amount);
          break;
        case 12:
          water[11] = water[11] + int(amount);
          break;
        default:
          break;
      }
      break;
    case 11:
      water[10] = water[10] - int(amount);
      switch (month2) {
        case 1:
          water[0] = water[0] + int(amount);
          break;
        case 2:
          water[1] = water[1] + int(amount);
          break;
        case 3:
          water[2] = water[2] + int(amount);
          break;
        case 4:
          water[3] = water[3] + int(amount);
          break;
        case 5:
          water[4] = water[4] + int(amount);
          break;
        case 6:
          water[5] = water[5] + int(amount);
          break;
        case 7:
          water[6] = water[6] + int(amount);
          break;
        case 8:
          water[7] = water[7] + int(amount);
          break;
        case 9:
          water[8] = water[8] + int(amount);
          break;
        case 10:
          water[9] = water[9] + int(amount);
          break;
        case 11:
          water[10] = water[10] + int(amount);
          break;
        case 12:
          water[11] = water[11] + int(amount);
          break;
        default:
          break;
      }
      break;
    case 12:
      water[11] = water[11] - int(amount);
      switch (month2) {
        case 1:
          water[0] = water[0] + int(amount);
          break;
        case 2:
          water[1] = water[1] + int(amount);
          break;
        case 3:
          water[2] = water[2] + int(amount);
          break;
        case 4:
          water[3] = water[3] + int(amount);
          break;
        case 5:
          water[4] = water[4] + int(amount);
          break;
        case 6:
          water[5] = water[5] + int(amount);
          break;
        case 7:
          water[6] = water[6] + int(amount);
          break;
        case 8:
          water[7] = water[7] + int(amount);
          break;
        case 9:
          water[8] = water[8] + int(amount);
          break;
        case 10:
          water[9] = water[9] + int(amount);
          break;
        case 11:
          water[10] = water[10] + int(amount);
          break;
        case 12:
          water[11] = water[11] + int(amount);
          break;
        default:
          break;
      }
      break;
    default:
      break;
  }
  console.log(water);
}
