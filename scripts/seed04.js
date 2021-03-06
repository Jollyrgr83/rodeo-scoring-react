// DATABASE SEED 04
// This file will add Score entries
//dependencies
const mongoose = require("mongoose");
// bring in models
const db = require("../models");
//establish mongoDB connection
mongoose.connect("mongodb://localhost/reactRodeoDB");

const scoreArr = [
{ year: 2017, competitorID: 1, 1, 97, 7, 39.1),
{ year: 2017, competitorID: 2, 1, 100, 6, 38.37),
{ year: 2017, competitorID: 3, 1, 98, 8, 51.91),
{ year: 2017, competitorID: 6, 1, 97, 7, 26.16),
{ year: 2017, competitorID: 4, 1, 98, 7, 11.03),
{ year: 2017, competitorID: 5, 1, 99, 7, 30.13),
{ year: 2017, competitorID: 7, 1, 98, 8, 14.44),
{ year: 2017, competitorID: 8, 1, 96, 9, 6.56),
{ year: 2017, competitorID: 9, 1, 97, 8, 41.56),
{ year: 2017, competitorID: 11, 1, 96, 7, 26.22),
{ year: 2017, competitorID: 10, 1, 94, 6, 52.21),
{ year: 2017, competitorID: 12, 1, 98, 8, 28.97),
{ year: 2017, competitorID: 14, 1, 97, 10, 28.14),
{ year: 2017, competitorID: 13, 1, 96, 8, 37.81),
{ year: 2017, competitorID: 16, 1, 99, 9, 1.66),
{ year: 2017, competitorID: 15, 1, 98, 12, 18.69),
{ year: 2017, competitorID: 17, 1, 97, 7, 21.12),
{ year: 2017, competitorID: 19, 1, 96, 8, 27.35),
{ year: 2017, competitorID: 18, 1, 99, 9, 8.36),
{ year: 2017, competitorID: 21, 1, 97, 8, 13.09),
{ year: 2017, competitorID: 20, 1, 99, 10, 25.25),
{ year: 2017, competitorID: 22, 1, 99, 7, 39.62),
{ year: 2017, competitorID: 23, 1, 97, 7, 38.44),
{ year: 2017, competitorID: 24, 1, 97, 10, 12.59),
{ year: 2017, competitorID: 27, 1, 97, 8, 26.22),
{ year: 2017, competitorID: 26, 1, 97, 7, 39.19),
{ year: 2017, competitorID: 28, 1, 99, 10, 48.13),
{ year: 2017, competitorID: 29, 1, 95, 11, 33.65),
{ year: 2017, competitorID: 25, 1, 97, 8, 16.13),
{ year: 2017, competitorID: 30, 1, 93, 11, 43.72),
{ year: 2017, competitorID: 31, 1, 96, 8, 27.66),
{ year: 2017, competitorID: 32, 1, 97, 8, 25.15),
{ year: 2017, competitorID: 34, 2, 100, 2, 10.28),
{ year: 2017, competitorID: 35, 2, 100, 2, 34.75),
{ year: 2017, competitorID: 33, 2, 100, 2, 37.25),
{ year: 2017, competitorID: 37, 2, 100, 1, 49.88),
{ year: 2017, competitorID: 36, 2, 100, 2, 10.65),
{ year: 2017, competitorID: 38, 2, 98, 2, 8.16),
{ year: 2017, competitorID: 40, 2, 100, 2, 53.91),
{ year: 2017, competitorID: 39, 2, 100, 2, 49.19),
{ year: 2017, competitorID: 41, 2, 96, 3, 15),
{ year: 2017, competitorID: 1, 2, 100, 2, 29.53),
{ year: 2017, competitorID: 2, 2, 100, 2, 51.54),
{ year: 2017, competitorID: 5, 2, 100, 2, 5.5),
{ year: 2017, competitorID: 3, 2, 100, 2, 29.31),
{ year: 2017, competitorID: 4, 2, 98, 3, 56.28),
{ year: 2017, competitorID: 6, 2, 80, 5, 20.72),
{ year: 2017, competitorID: 7, 2, 100, 2, 22.13),
{ year: 2017, competitorID: 8, 2, 96, 2, 53.19),
{ year: 2017, competitorID: 10, 2, 100, 2, 10.59),
{ year: 2017, competitorID: 11, 2, 100, 2, 24.16),
{ year: 2017, competitorID: 9, 2, 100, 1, 53.47),
{ year: 2017, competitorID: 12, 2, 100, 2, 14.77),
{ year: 2017, competitorID: 13, 2, 98, 3, 10.79),
{ year: 2017, competitorID: 15, 2, 100, 2, 29.56),
{ year: 2017, competitorID: 14, 2, 98, 3, 11.9),
{ year: 2017, competitorID: 16, 2, 100, 2, 14.96),
{ year: 2017, competitorID: 18, 2, 100, 2, 5.53),
{ year: 2017, competitorID: 17, 2, 100, 2, 40.16),
{ year: 2017, competitorID: 19, 2, 100, 2, 10.69),
{ year: 2017, competitorID: 20, 2, 100, 2, 45.1),
{ year: 2017, competitorID: 21, 2, 100, 2, 31.38),
{ year: 2017, competitorID: 22, 2, 100, 3, 26.25),
{ year: 2017, competitorID: 24, 2, 100, 2, 29.79),
{ year: 2017, competitorID: 23, 2, 100, 2, 21.24),
{ year: 2017, competitorID: 25, 2, 100, 2, 50.09),
{ year: 2017, competitorID: 26, 2, 100, 2, 28.17),
{ year: 2017, competitorID: 27, 2, 100, 2, 26.69),
{ year: 2017, competitorID: 29, 2, 88, 12, 40.72),
{ year: 2017, competitorID: 28, 2, 100, 2, 4.84),
{ year: 2017, competitorID: 30, 2, 96, 3, 33.31),
{ year: 2017, competitorID: 31, 2, 100, 2, 42.56),
{ year: 2017, competitorID: 32, 2, 100, 2, 33.97),
{ year: 2017, competitorID: 35, 13, 98, 2, 7.09),
{ year: 2017, competitorID: 34, 13, 100, 1, 55.12),
{ year: 2017, competitorID: 36, 13, 94, 2, 4.47),
{ year: 2017, competitorID: 37, 13, 96, 2, 0.32),
{ year: 2017, competitorID: 38, 13, 100, 1, 39.5),
{ year: 2017, competitorID: 39, 13, 98, 2, 30.94),
{ year: 2017, competitorID: 33, 13, 94, 2, 7.38),
{ year: 2017, competitorID: 1, 13, 100, 1, 49.22),
{ year: 2017, competitorID: 41, 13, 98, 2, 4.85),
{ year: 2017, competitorID: 40, 13, 92, 2, 29.56),
{ year: 2017, competitorID: 2, 13, 100, 1, 56.87),
{ year: 2017, competitorID: 3, 13, 96, 2, 12.44),
{ year: 2017, competitorID: 4, 13, 98, 1, 47.15),
{ year: 2017, competitorID: 5, 13, 98, 1, 41.15),
{ year: 2017, competitorID: 7, 13, 100, 1, 55.03),
{ year: 2017, competitorID: 8, 13, 100, 1, 48.1),
{ year: 2017, competitorID: 9, 13, 100, 1, 23.72),
{ year: 2017, competitorID: 10, 13, 94, 2, 6.35),
{ year: 2017, competitorID: 6, 13, 100, 1, 39.25),
{ year: 2017, competitorID: 12, 13, 98, 2, 15.81),
{ year: 2017, competitorID: 13, 13, 100, 1, 33.94),
{ year: 2017, competitorID: 14, 13, 100, 1, 33.72),
{ year: 2017, competitorID: 11, 13, 98, 1, 56.16),
{ year: 2017, competitorID: 15, 13, 100, 1, 40.28),
{ year: 2017, competitorID: 16, 13, 100, 1, 19.78),
{ year: 2017, competitorID: 17, 13, 98, 2, 12.93),
{ year: 2017, competitorID: 18, 13, 94, 2, 22.32),
{ year: 2017, competitorID: 19, 13, 100, 1, 25.19),
{ year: 2017, competitorID: 21, 13, 98, 1, 28.16),
{ year: 2017, competitorID: 20, 13, 100, 1, 56.16),
{ year: 2017, competitorID: 22, 13, 96, 2, 0.63),
{ year: 2017, competitorID: 23, 13, 100, 1, 49.87),
{ year: 2017, competitorID: 26, 13, 100, 1, 42.09),
{ year: 2017, competitorID: 24, 13, 98, 1, 56.69),
{ year: 2017, competitorID: 25, 13, 98, 2, 20.81),
{ year: 2017, competitorID: 27, 13, 100, 1, 29.31),
{ year: 2017, competitorID: 28, 13, 100, 1, 40.94),
{ year: 2017, competitorID: 29, 13, 94, 2, 26.87),
{ year: 2017, competitorID: 30, 13, 96, 2, 4.65),
{ year: 2017, competitorID: 31, 13, 96, 2, 7.37),
{ year: 2017, competitorID: 32, 13, 98, 1, 36.13),
{ year: 2017, competitorID: 33, 14, 98, 9, 49.47),
{ year: 2017, competitorID: 34, 14, 98, 9, 48.81),
{ year: 2017, competitorID: 36, 14, 94, 12, 35.68),
{ year: 2017, competitorID: 35, 14, 100, 7, 47.94),
{ year: 2017, competitorID: 37, 14, 100, 8, 12.28),
{ year: 2017, competitorID: 38, 14, 100, 6, 51.47),
{ year: 2017, competitorID: 40, 14, 94, 16, 7.25),
{ year: 2017, competitorID: 39, 14, 100, 8, 51.19),
{ year: 2017, competitorID: 41, 14, 90, 9, 34.63),
{ year: 2017, competitorID: 1, 4, 100, 3, 52.82),
{ year: 2017, competitorID: 2, 4, 100, 4, 13.25),
{ year: 2017, competitorID: 4, 4, 100, 4, 45.72),
{ year: 2017, competitorID: 3, 4, 100, 5, 21.5),
{ year: 2017, competitorID: 5, 4, 100, 2, 31.78),
{ year: 2017, competitorID: 6, 4, 100, 3, 44.94),
{ year: 2017, competitorID: 7, 4, 100, 2, 22.84),
{ year: 2017, competitorID: 8, 4, 100, 3, 25.22),
{ year: 2017, competitorID: 9, 4, 100, 3, 15.25),
{ year: 2017, competitorID: 10, 4, 100, 2, 36.94),
{ year: 2017, competitorID: 11, 4, 100, 2, 55.91),
{ year: 2017, competitorID: 12, 4, 100, 3, 2.97),
{ year: 2017, competitorID: 13, 4, 100, 2, 5.97),
{ year: 2017, competitorID: 14, 4, 100, 2, 5.41),
{ year: 2017, competitorID: 15, 4, 100, 2, 39.31),
{ year: 2017, competitorID: 16, 4, 100, 2, 49.46),
{ year: 2017, competitorID: 17, 4, 100, 3, 59.16),
{ year: 2017, competitorID: 19, 4, 100, 2, 29.02),
{ year: 2017, competitorID: 18, 4, 100, 3, 12.84),
{ year: 2017, competitorID: 20, 4, 100, 2, 28.47),
{ year: 2017, competitorID: 22, 4, 100, 3, 33.44),
{ year: 2017, competitorID: 21, 4, 100, 2, 26.66),
{ year: 2017, competitorID: 23, 4, 100, 3, 2.56),
{ year: 2017, competitorID: 25, 4, 98, 6, 40.78),
{ year: 2017, competitorID: 24, 4, 100, 3, 7.84),
{ year: 2017, competitorID: 26, 4, 100, 3, 53.81),
{ year: 2017, competitorID: 27, 4, 100, 3, 4.19),
{ year: 2017, competitorID: 28, 4, 100, 3, 9.31),
{ year: 2017, competitorID: 29, 4, 98, 8, 25.63),
{ year: 2017, competitorID: 30, 4, 100, 5, 57.5),
{ year: 2017, competitorID: 32, 4, 100, 2, 1.32),
{ year: 2017, competitorID: 31, 4, 100, 4, 20.6),
{ year: 2017, competitorID: 33, 11, 96, 10, 44.65),
{ year: 2017, competitorID: 34, 11, 96, 12, 59.71),
{ year: 2017, competitorID: 36, 11, 96, 9, 27.66),
{ year: 2017, competitorID: 35, 11, 100, 9, 2.66),
{ year: 2017, competitorID: 37, 11, 100, 7, 46.54),
{ year: 2017, competitorID: 38, 11, 100, 7, 20.25),
{ year: 2017, competitorID: 39, 11, 100, 8, 54.59),
{ year: 2017, competitorID: 40, 11, 84, 18, 57.34),
{ year: 2017, competitorID: 41, 11, 98, 11, 16.4),
{ year: 2017, competitorID: 2, 15, 100, 3, 55.12),
{ year: 2017, competitorID: 1, 15, 100, 3, 4.91),
{ year: 2017, competitorID: 3, 15, 94, 7, 35.5),
{ year: 2017, competitorID: 4, 15, 100, 4, 29.36),
{ year: 2017, competitorID: 5, 15, 100, 2, 36.81),
{ year: 2017, competitorID: 6, 15, 100, 1, 42.42),
{ year: 2017, competitorID: 7, 15, 100, 2, 24.11),
{ year: 2017, competitorID: 10, 15, 100, 2, 4.69),
{ year: 2017, competitorID: 8, 15, 100, 2, 57.96),
{ year: 2017, competitorID: 9, 15, 100, 2, 2.34),
{ year: 2017, competitorID: 13, 15, 100, 1, 38.16),
{ year: 2017, competitorID: 11, 15, 100, 2, 29.56),
{ year: 2017, competitorID: 15, 15, 100, 1, 31.28),
{ year: 2017, competitorID: 14, 15, 100, 2, 22.93),
{ year: 2017, competitorID: 12, 15, 100, 2, 37.93),
{ year: 2017, competitorID: 16, 15, 100, 1, 38.43),
{ year: 2017, competitorID: 17, 15, 100, 4, 5.6),
{ year: 2017, competitorID: 18, 15, 100, 2, 40.43),
{ year: 2017, competitorID: 20, 15, 98, 3, 6.15),
{ year: 2017, competitorID: 19, 15, 100, 1, 39),
{ year: 2017, competitorID: 21, 15, 100, 1, 30.37),
{ year: 2017, competitorID: 23, 15, 98, 3, 5.09),
{ year: 2017, competitorID: 22, 15, 100, 2, 31.21),
{ year: 2017, competitorID: 24, 15, 100, 2, 54.4),
{ year: 2017, competitorID: 25, 15, 100, 3, 11.87),
{ year: 2017, competitorID: 26, 15, 98, 4, 43.35),
{ year: 2017, competitorID: 27, 15, 100, 2, 50.51),
{ year: 2017, competitorID: 28, 15, 100, 2, 11.3),
{ year: 2017, competitorID: 29, 15, 84, 16, 13.34),
{ year: 2017, competitorID: 30, 15, 100, 3, 35.16),
{ year: 2017, competitorID: 31, 15, 100, 3, 17.3),
{ year: 2017, competitorID: 32, 15, 100, 1, 51),
{ year: 2017, competitorID: 33, 6, 86, 9, 0),
{ year: 2017, competitorID: 34, 6, 98, 4, 23.59),
{ year: 2017, competitorID: 36, 6, 100, 3, 23.88),
{ year: 2017, competitorID: 35, 6, 100, 4, 38.88),
{ year: 2017, competitorID: 37, 6, 100, 3, 28.53),
{ year: 2017, competitorID: 38, 6, 100, 2, 47.09),
{ year: 2017, competitorID: 39, 6, 100, 5, 14.25),
{ year: 2017, competitorID: 40, 6, 88, 9, 0),
{ year: 2017, competitorID: 41, 6, 100, 3, 52.25),
(2, 42, 1, 97, 5, 54.1),
(2, 43, 1, 93, 7, 26.03),
(2, 44, 1, 95, 7, 31.62),
(2, 45, 1, 95, 10, 9.47),
(2, 46, 1, 94, 7, 54.85),
(2, 47, 1, 98, 5, 46.44),
(2, 48, 1, 94, 6, 3.41),
(2, 49, 1, 95, 10, 27.85),
(2, 50, 1, 95, 8, 7.81),
(2, 51, 1, 94, 9, 51.66),
(2, 52, 1, 95, 8, 20.93),
(2, 54, 1, 94, 10, 31.47),
(2, 53, 1, 94, 8, 39.43),
(2, 56, 1, 99, 7, 43.34),
(2, 55, 1, 89, 11, 54.47),
(2, 58, 1, 94, 7, 56.25),
(2, 57, 1, 93, 10, 9.97),
(2, 59, 1, 95, 7, 55.75),
(2, 61, 1, 96, 8, 36.44),
(2, 62, 1, 97, 9, 50.79),
(2, 60, 1, 97, 8, 11.34),
(2, 63, 1, 98, 10, 7.09),
(2, 64, 1, 96, 11, 38.46),
(2, 65, 1, 98, 5, 19.72),
(2, 66, 1, 96, 11, 2.62),
(2, 67, 1, 96, 11, 42.25),
(2, 68, 1, 98, 8, 31.32),
(2, 69, 1, 95, 10, 11),
(2, 70, 1, 96, 7, 58.43),
(2, 71, 1, 97, 9, 33.62),
(2, 72, 1, 99, 9, 20.03),
(2, 73, 1, 90, 7, 42.47),
(2, 74, 1, 96, 8, 5.75),
(2, 75, 1, 97, 6, 19.88),
(2, 76, 1, 96, 10, 32.94),
(2, 77, 1, 95, 10, 27.15),
(2, 78, 1, 95, 8, 18.06),
(2, 79, 1, 98, 7, 52.16),
(2, 80, 1, 96, 8, 4.69),
(2, 81, 1, 98, 7, 32.69),
(2, 82, 1, 96, 12, 4.1),
(2, 83, 1, 98, 7, 54.56),
(2, 85, 1, 91, 7, 20.29),
(2, 86, 1, 97, 6, 59.47),
(2, 88, 2, 100, 1, 53.85),
(2, 87, 2, 100, 2, 19.41),
(2, 84, 1, 94, 7, 51.03),
(2, 89, 2, 100, 2, 49.03),
(2, 92, 2, 100, 1, 45.75),
(2, 90, 2, 98, 3, 20.82),
(2, 91, 2, 100, 2, 2.72),
(2, 93, 2, 98, 1, 51.06),
(2, 94, 2, 100, 2, 15.34),
(2, 97, 2, 98, 1, 56.63),
(2, 96, 2, 78, 4, 14.03),
(2, 95, 2, 100, 2, 19.85),
(2, 98, 2, 96, 2, 31.19),
(2, 99, 2, 98, 1, 57.54),
(2, 100, 2, 100, 1, 55.56),
(2, 42, 2, 98, 3, 21.68),
(2, 101, 2, 88, 6, 38.75),
(2, 102, 2, 98, 3, 3.66),
(2, 44, 2, 98, 2, 50.29),
(2, 43, 2, 100, 2, 0.69),
(2, 45, 2, 100, 2, 31.59),
(2, 46, 2, 100, 1, 31.68),
(2, 47, 2, 100, 3, 31.16),
(2, 49, 2, 100, 2, 42.47),
(2, 48, 2, 100, 2, 12.97),
(2, 51, 2, 98, 2, 8.09),
(2, 52, 2, 96, 3, 25.53),
(2, 54, 2, 96, 2, 46.37),
(2, 53, 2, 100, 2, 15.5),
(2, 55, 2, 100, 2, 7.15),
(2, 56, 2, 100, 2, 56.16),
(2, 50, 2, 98, 3, 48.32),
(2, 58, 2, 100, 2, 46.32),
(2, 59, 2, 100, 2, 48.97),
(2, 61, 2, 100, 1, 59.03),
(2, 62, 2, 100, 2, 31.66),
(2, 60, 2, 100, 3, 1.56),
(2, 63, 2, 84, 2, 28.97),
(2, 57, 2, 100, 3, 20.62),
(2, 64, 2, 100, 3, 5.31),
(2, 65, 2, 100, 2, 13.53),
(2, 66, 2, 100, 2, 27.97),
(2, 67, 2, 98, 3, 51.43),
(2, 68, 2, 100, 2, 34.19),
(2, 69, 2, 100, 3, 12.41),
(2, 70, 2, 100, 2, 23.19),
(2, 72, 2, 100, 2, 18.9),
(2, 71, 2, 100, 2, 1.88),
(2, 74, 2, 100, 2, 21.09),
(2, 73, 2, 100, 2, 17.44),
(2, 76, 2, 100, 1, 49.59),
(2, 77, 2, 100, 2, 26.66),
(2, 78, 2, 100, 2, 48.56),
(2, 75, 2, 100, 2, 14.19),
(2, 81, 2, 86, 5, 27.5),
(2, 80, 2, 100, 4, 12.22),
(2, 79, 2, 100, 4, 7.37),
(2, 82, 2, 100, 2, 20.78),
(2, 83, 2, 100, 3, 7.72),
(2, 84, 2, 88, 7, 17.32),
(2, 85, 2, 100, 2, 41.59),
(2, 86, 2, 90, 5, 1.66),
(2, 87, 5, 100, 7, 50.82),
(2, 89, 5, 100, 9, 45.4),
(2, 88, 5, 100, 7, 18.78),
(2, 90, 5, 98, 11, 42.02),
(2, 91, 5, 100, 7, 7.47),
(2, 94, 5, 98, 13, 49.91),
(2, 93, 5, 100, 6, 54.22),
(2, 92, 5, 100, 8, 23.12),
(2, 95, 5, 100, 10, 35.85),
(2, 97, 5, 100, 5, 37.11),
(2, 96, 5, 98, 10, 49.99),
(2, 99, 5, 100, 7, 4.84),
(2, 98, 5, 100, 9, 34.14),
(2, 100, 5, 100, 6, 39.91),
(2, 42, 9, 100, 4, 6.59),
(2, 101, 5, 100, 10, 22.91),
(2, 102, 5, 100, 10, 38.41),
(2, 44, 9, 100, 5, 34.72),
(2, 43, 9, 98, 4, 51.75),
(2, 45, 9, 98, 4, 23.19),
(2, 46, 9, 100, 3, 25.63),
(2, 48, 9, 100, 3, 8),
(2, 47, 9, 100, 6, 1.5),
(2, 49, 9, 100, 5, 22.69),
(2, 50, 9, 100, 10, 37.24),
(2, 51, 9, 100, 4, 26.16),
(2, 52, 9, 100, 6, 25.54),
(2, 53, 9, 100, 5, 29.66),
(2, 55, 9, 100, 6, 24.84),
(2, 54, 9, 100, 5, 39.38),
(2, 56, 9, 100, 6, 12.75),
(2, 57, 9, 100, 6, 28.05),
(2, 58, 9, 98, 3, 50.37),
(2, 59, 9, 98, 5, 45.63),
(2, 60, 9, 100, 5, 3.93),
(2, 63, 9, 98, 5, 23.16),
(2, 62, 9, 100, 4, 21.69),
(2, 64, 9, 100, 6, 52.18),
(2, 65, 9, 100, 3, 24.11),
(2, 61, 9, 100, 3, 17.47),
(2, 66, 9, 100, 4, 27.46),
(2, 70, 9, 100, 3, 57.51),
(2, 67, 9, 98, 5, 28.56),
(2, 69, 9, 100, 11, 37.67),
(2, 71, 9, 100, 3, 57.62),
(2, 68, 9, 98, 6, 40.98),
(2, 73, 9, 100, 3, 28.66),
(2, 72, 9, 100, 3, 5.19),
(2, 74, 9, 100, 3, 2.96),
(2, 76, 9, 100, 2, 53.91),
(2, 75, 9, 100, 4, 20.47),
(2, 77, 9, 100, 3, 8.72),
(2, 78, 9, 100, 5, 58.53),
(2, 79, 9, 100, 8, 23.13),
(2, 82, 9, 100, 3, 20.75),
(2, 81, 9, 100, 7, 9.66),
(2, 83, 9, 100, 4, 9.16),
(2, 80, 9, 100, 9, 7.3),
(2, 84, 9, 82, 14, 38.86),
(2, 85, 9, 100, 4, 42.56),
(2, 86, 9, 100, 6, 45.35),
(2, 87, 10, 100, 7, 54.84),
(2, 89, 10, 96, 13, 23.81),
(2, 88, 10, 100, 8, 39.31),
(2, 90, 10, 86, 15, 0),
(2, 91, 10, 100, 7, 10.75),
(2, 92, 10, 100, 7, 3.16),
(2, 93, 10, 100, 6, 28.31),
(2, 94, 10, 98, 11, 4.25),
(2, 95, 10, 94, 14, 32.57),
(2, 96, 10, 98, 14, 13.87),
(2, 97, 10, 100, 5, 59.09),
(2, 98, 10, 100, 9, 45.56),
(2, 99, 10, 100, 7, 15.53),
(2, 100, 10, 100, 6, 24.59),
(2, 101, 10, 98, 10, 58),
(2, 102, 10, 86, 15, 0),
(2, 42, 5, 100, 4, 5.87),
(2, 43, 5, 100, 4, 43.68),
(2, 44, 5, 100, 4, 35.25),
(2, 46, 5, 100, 3, 1.97),
(2, 45, 5, 100, 3, 31.41),
(2, 47, 5, 100, 4, 42.59),
(2, 48, 5, 100, 4, 4.56),
(2, 49, 5, 100, 4, 32.07),
(2, 50, 5, 100, 7, 21.94),
(2, 51, 5, 100, 4, 58.97),
(2, 53, 5, 98, 4, 57.5),
(2, 52, 5, 100, 7, 43.56),
(2, 54, 5, 100, 5, 4.93),
(2, 55, 5, 100, 4, 46.94),
(2, 58, 5, 100, 3, 29.94),
(2, 56, 5, 98, 5, 14.12),
(2, 57, 5, 100, 5, 25.97),
(2, 59, 5, 100, 3, 41.19),
(2, 60, 5, 100, 3, 59.66),
(2, 61, 5, 100, 3, 39.85),
(2, 63, 5, 100, 2, 57.91),
(2, 62, 5, 100, 4, 3.75),
(2, 64, 5, 100, 5, 56.09),
(2, 65, 5, 100, 3, 15.88),
(2, 68, 5, 100, 4, 59.28),
(2, 66, 5, 98, 6, 59.04),
(2, 67, 5, 98, 5, 20.19),
(2, 70, 5, 100, 4, 36.57),
(2, 69, 5, 100, 7, 12.1),
(2, 71, 5, 100, 3, 18.57),
(2, 72, 5, 100, 3, 50.97),
(2, 73, 5, 100, 3, 20.85),
(2, 74, 5, 100, 3, 23.22),
(2, 76, 5, 100, 3, 8.71),
(2, 78, 5, 100, 5, 30.75),
(2, 75, 5, 90, 4, 11.96),
(2, 77, 5, 100, 3, 11.53),
(2, 80, 5, 98, 7, 21.94),
(2, 79, 5, 100, 7, 8.66),
(2, 81, 5, 100, 7, 10.65),
(2, 82, 5, 100, 5, 4.44),
(2, 83, 5, 100, 4, 15.16),
(2, 85, 5, 100, 6, 6.72),
(2, 84, 5, 100, 11, 28.19),
(2, 86, 5, 100, 6, 41.5),
(2, 88, 11, 100, 6, 47.31),
(2, 87, 11, 100, 7, 19.91),
(2, 89, 11, 86, 12, 53.91),
(2, 90, 11, 76, 12, 0),
(2, 91, 11, 100, 7, 22.28),
(2, 92, 11, 98, 8, 45.84),
(2, 93, 11, 100, 6, 37.63),
(2, 94, 11, 98, 10, 52.75),
(2, 95, 11, 88, 12, 51.97),
(2, 97, 11, 90, 5, 51.08),
(2, 98, 11, 98, 9, 17.12),
(2, 99, 11, 100, 7, 2.93),
(2, 96, 11, 88, 12, 0),
(2, 101, 11, 100, 10, 44.22),
(2, 102, 11, 88, 12, 0),
(2, 100, 11, 100, 5, 44.41),
(2, 42, 12, 100, 0, 56.03),
(2, 43, 12, 100, 0, 55.54),
(2, 44, 12, 100, 0, 55.19),
(2, 45, 12, 100, 1, 4.16),
(2, 46, 12, 100, 0, 48.09),
(2, 47, 12, 100, 1, 13.31),
(2, 48, 12, 100, 0, 59.23),
(2, 49, 12, 100, 0, 45.6),
(2, 51, 12, 100, 1, 11.09),
(2, 50, 12, 98, 2, 38.22),
(2, 52, 12, 100, 1, 14.94),
(2, 53, 12, 100, 1, 56.75),
(2, 54, 12, 98, 1, 34.15),
(2, 55, 12, 100, 1, 22.66),
(2, 56, 12, 100, 1, 26.44),
(2, 58, 12, 100, 0, 58.91),
(2, 57, 12, 100, 2, 20.72),
(2, 59, 12, 100, 0, 48.68),
(2, 60, 12, 100, 1, 4.91),
(2, 61, 12, 100, 0, 46.25),
(2, 62, 12, 100, 1, 0.44),
(2, 63, 12, 100, 0, 59.57),
(2, 65, 12, 100, 0, 53.53),
(2, 64, 12, 98, 0, 56.03),
(2, 67, 12, 100, 1, 29.19),
(2, 66, 12, 100, 1, 22.31),
(2, 68, 12, 100, 1, 33.06),
(2, 69, 12, 100, 1, 28.66),
(2, 72, 12, 100, 0, 51.37),
(2, 73, 12, 100, 0, 50.38),
(2, 71, 12, 100, 0, 45.37),
(2, 70, 12, 100, 0, 55.65),
(2, 75, 12, 100, 0, 55.72),
(2, 74, 12, 100, 1, 0.32),
(2, 76, 12, 100, 0, 46.47),
(2, 77, 12, 100, 0, 53.78),
(2, 78, 12, 100, 1, 34.25),
(2, 79, 12, 100, 1, 19.66),
(2, 82, 12, 100, 0, 58.81),
(2, 81, 12, 98, 2, 13.69),
(2, 80, 12, 100, 2, 12),
(2, 83, 12, 98, 0, 52.57),
(2, 84, 12, 100, 1, 2.28),
(2, 87, 12, 100, 0, 56.47),
(2, 85, 12, 100, 1, 5.69),
(2, 86, 12, 100, 1, 14.63),
(2, 89, 12, 100, 1, 38.03),
(2, 88, 12, 100, 1, 1.22),
(2, 92, 12, 100, 1, 3.28),
(2, 90, 12, 98, 1, 50.65),
(2, 93, 12, 100, 0, 49.35),
(2, 94, 12, 100, 1, 26),
(2, 91, 12, 100, 0, 52.34),
(2, 96, 12, 100, 2, 2.28),
(2, 95, 12, 100, 1, 3.69),
(2, 98, 12, 100, 1, 19.81),
(2, 99, 12, 100, 1, 1.65),
(2, 97, 12, 96, 1, 5.35),
(2, 100, 12, 100, 1, 1.9),
(3, 103, 1, 97, 5, 13),
(2, 101, 12, 100, 0, 59.66),
(2, 102, 12, 98, 2, 5.53),
(3, 104, 1, 93, 6, 11),
(3, 105, 1, 96, 5, 45),
(3, 107, 1, 100, 6, 24),
(3, 108, 1, 99, 7, 50),
(3, 106, 1, 97, 7, 17),
(3, 109, 1, 89, 7, 44),
(3, 111, 1, 91, 8, 45),
(3, 113, 1, 97, 7, 28),
(3, 110, 1, 91, 5, 8),
(3, 112, 1, 91, 6, 19),
(3, 114, 1, 91, 5, 30),
(3, 115, 1, 94, 6, 34),
(3, 118, 1, 93, 4, 42),
(3, 116, 1, 94, 7, 26),
(3, 117, 1, 94, 6, 35),
(3, 120, 1, 99, 3, 43),
(3, 119, 1, 96, 5, 17),
(3, 121, 1, 99, 6, 15),
(3, 122, 2, 100, 2, 57),
(3, 123, 2, 100, 1, 58.65),
(3, 124, 2, 98, 3, 4.35),
(3, 125, 2, 100, 1, 55.18),
(3, 126, 2, 100, 2, 21),
(3, 128, 2, 100, 1, 53.75),
(3, 127, 2, 100, 1, 44),
(3, 129, 2, 100, 1, 59.69),
(3, 103, 2, 100, 1, 52),
(3, 104, 2, 98, 4, 58),
(3, 130, 2, 100, 2, 47.21),
(3, 105, 2, 98, 2, 42),
(3, 106, 2, 100, 2, 38),
(3, 107, 2, 100, 2, 34),
(3, 109, 2, 98, 3, 10),
(3, 110, 2, 98, 2, 35),
(3, 108, 2, 100, 2, 23),
(3, 112, 2, 98, 2, 50),
(3, 113, 2, 100, 1, 46),
(3, 111, 2, 100, 3, 28),
(3, 114, 2, 100, 2, 54),
(3, 115, 2, 100, 2, 47),
(3, 119, 2, 100, 2, 45),
(3, 118, 2, 98, 3, 7),
(3, 116, 2, 98, 4, 28),
(3, 120, 2, 98, 3, 4.22),
(3, 122, 3, 100, 5, 1),
(3, 121, 2, 100, 2, 43),
(3, 123, 3, 100, 5, 12),
(3, 124, 3, 100, 7, 52),
(3, 125, 3, 100, 6, 17),
(3, 126, 3, 98, 10, 56.22),
(3, 128, 3, 100, 4, 37.94),
(3, 129, 3, 100, 4, 51),
(3, 127, 3, 100, 4, 37.44),
(3, 117, 2, 100, 2, 4),
(3, 105, 4, 100, 2, 36),
(3, 130, 3, 98, 7, 46),
(3, 103, 4, 100, 2, 6),
(3, 104, 4, 100, 3, 8),
(3, 106, 4, 100, 2, 31),
(3, 108, 4, 100, 3, 9),
(3, 109, 4, 100, 4, 57),
(3, 107, 4, 100, 3, 2),
(3, 110, 4, 100, 3, 22),
(3, 111, 4, 100, 2, 56),
(3, 112, 4, 100, 3, 13),
(3, 113, 4, 100, 2, 9),
(3, 114, 4, 100, 2, 37.75),
(3, 115, 4, 100, 2, 37.69),
(3, 116, 4, 100, 2, 52),
(3, 117, 4, 100, 3, 18),
(3, 118, 4, 98, 5, 2),
(3, 119, 4, 100, 3, 21),
(3, 121, 4, 98, 4, 40),
(3, 122, 6, 100, 3, 4.22),
(3, 120, 4, 98, 4, 11),
(3, 123, 6, 100, 4, 23.72),
(3, 124, 6, 98, 6, 28),
(3, 125, 6, 100, 4, 4),
(3, 127, 6, 100, 3, 4.19),
(3, 126, 6, 100, 4, 42),
(3, 128, 6, 100, 3, 13.46),
(3, 129, 6, 100, 3, 18.16),
(3, 130, 6, 96, 3, 18.94),
(3, 103, 5, 100, 2, 47),
(3, 104, 5, 100, 3, 56),
(3, 105, 5, 100, 3, 35),
(3, 106, 5, 100, 3, 55),
(3, 108, 5, 100, 3, 25),
(3, 107, 5, 100, 3, 57),
(3, 109, 5, 100, 4, 53),
(3, 110, 5, 96, 4, 3),
(3, 111, 5, 100, 4, 3.63),
(3, 112, 5, 100, 3, 49.29),
(3, 114, 5, 100, 4, 13),
(3, 113, 5, 100, 3, 45),
(3, 115, 5, 100, 4, 2),
(3, 117, 5, 100, 3, 13),
(3, 118, 5, 100, 4, 18),
(3, 116, 5, 98, 4, 17),
(3, 119, 5, 100, 3, 49),
(3, 120, 5, 100, 2, 53),
(3, 121, 5, 100, 3, 3),
(3, 122, 7, 100, 0, 26),
(3, 124, 7, 100, 0, 37.03),
(3, 123, 7, 100, 0, 31),
(3, 125, 7, 100, 0, 37.06),
(3, 126, 7, 98, 0, 41),
(3, 127, 7, 100, 0, 30),
(3, 128, 7, 100, 0, 29),
(3, 129, 7, 98, 0, 31.31),
(3, 103, 7, 100, 0, 21.28),
(3, 104, 7, 100, 0, 22.62),
(3, 130, 7, 98, 0, 25.29),
(3, 106, 7, 100, 0, 32.03),
(3, 107, 7, 98, 0, 26.35),
(3, 105, 7, 100, 0, 24.72),
(3, 109, 7, 100, 0, 38.03),
(3, 112, 7, 98, 0, 38.22),
(3, 108, 7, 100, 0, 29.25),
(3, 110, 7, 100, 0, 30.4),
(3, 111, 7, 100, 0, 51.62),
(3, 113, 7, 100, 0, 32.44),
(3, 114, 7, 100, 0, 27.16),
(3, 116, 7, 100, 0, 31.81),
(3, 117, 7, 98, 0, 20.06),
(3, 118, 7, 100, 0, 26.31),
(3, 115, 7, 100, 0, 29.37),
(3, 121, 7, 98, 0, 15.63),
(3, 120, 7, 100, 0, 28.29),
(3, 122, 8, 100, 5, 11),
(3, 123, 8, 100, 4, 27),
(3, 125, 8, 100, 6, 31.41),
(3, 124, 8, 88, 8, 27),
(3, 126, 8, 100, 6, 31.1),
(3, 127, 8, 100, 4, 30.59),
(3, 128, 8, 100, 4, 30.06),
(3, 129, 8, 100, 4, 30.94),
(3, 130, 8, 96, 6, 46.06),
(3, 119, 7, 98, 0, 21.88),

];