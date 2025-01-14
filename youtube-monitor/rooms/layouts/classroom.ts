import { RoomLayout } from "../../types/room-layout";

export const classRoomLayout: RoomLayout = {
    version: 18,
    font_size_ratio: 0.015,
    room_shape: {
      width: 330,
      height: 230
    },
    seat_shape: {
      width: 30,
      height: 20
    },
    partition_shapes: [
      {
        name: "teacherDesk",
        width: 50,
        height: 20
      },
      {
        name: "vs1",
        width: 5,
        height: 10
      },
      {
        name: "hl1",
        width: 170,
        height: 5
      },
      {
        name: "vl1",
        width: 5,
        height: 90
      },
      {
        name: "hl2",
        width: 160,
        height: 5
      },
      {
        name: "vl2",
        width: 5,
        height: 55
      },
      {
        name: "v1",
        width: 2,
        height: 55
      },
      {
        name: "vl3",
        width: 5,
        height: 108
      },
      {
        name: "h1",
        width: 75,
        height: 2
      },
      {
        name: "h2",
        width: 35,
        height: 2
      },
      {
        name: "vm1",
        width: 4,
        height: 30
      },
      {
        name: "v2",
        width: 2,
        height: 25
      },    {
        name: "hl4",
        width: 126,
        height: 5
      },
      {
        name: "v3",
        width: 3,
        height: 25
      }
    ],
    seats: [
      {
        id: 1,
        x: 10,
        y: 10
      },
      {
        id: 2,
        x: 10,
        y: 40
      },
      {
        id: 3,
        x: 10,
        y: 70
      },
      {
        id: 4,
        x: 10,
        y: 100
      },
      {
        id: 5,
        x: 50,
        y: 40
      },
      {
        id: 6,
        x: 50,
        y: 70
      },
      {
        id: 7,
        x: 50,
        y: 100
      },
      {
        id: 8,
        x: 90,
        y: 40
      },
      {
        id: 9,
        x: 90,
        y: 70
      },
      {
        id: 10,
        x: 90,
        y: 100
      },
      {
        id: 11,
        x: 130,
        y: 10
      },
      {
        id: 12,
        x: 130,
        y: 40
      },
      {
        id: 13,
        x: 130,
        y: 70
      },
      {
        id: 14,
        x: 130,
        y: 100
      },
      {
        id: 15,
        x: 0,
        y: 140
      },
      {
        id: 16,
        x: 32,
        y: 140
      },
      {
        id: 17,
        x: 64,
        y: 140
      },
      {
        id: 18,
        x: 96,
        y: 140
      },
      {
        id: 19,
        x: 128,
        y: 140
      },
      {
        id: 20,
        x: 0,
        y: 165
      },
      {
        id: 21,
        x: 32,
        y: 165
      },
      {
        id: 22,
        x: 64,
        y: 165
      },
      {
        id: 23,
        x: 96,
        y: 165
      },
      {
        id: 24,
        x: 128,
        y: 165
      },
      {
        id: 25,
        x: 205,
        y: 0
      },
      {
        id: 26,
        x: 205,
        y: 22
      },
      {
        id: 27,
        x: 205,
        y: 44
      },
      {
        id: 28,
        x: 205,
        y: 66
      },
      {
        id: 29,
        x: 205,
        y: 88
      },
      {
        id: 30,
        x: 240,
        y: 0
      },
      {
        id: 31,
        x: 240,
        y: 22
      },
      {
        id: 32,
        x: 240,
        y: 44
      },
      {
        id: 33,
        x: 240,
        y: 66
      },
      {
        id: 34,
        x: 240,
        y: 88
      },
      {
        id: 35,
        x: 300,
        y: 0
      },
      {
        id: 36,
        x: 300,
        y: 22
      },
      {
        id: 37,
        x: 300,
        y: 44
      },
      {
        id: 38,
        x: 300,
        y: 66
      },
      {
        id: 39,
        x: 300,
        y: 88
      },
      {
        id: 40,
        x: 204,
        y: 130
      },
      {
        id: 41,
        x: 236,
        y: 130
      },
      {
        id: 42,
        x: 268,
        y: 130
      },
      {
        id: 43,
        x: 300,
        y: 130
      },
      {
        id: 44,
        x: 204,
        y: 170
      },
      {
        id: 45,
        x: 236,
        y: 170
      },
      {
        id: 46,
        x: 268,
        y: 170
      },
      {
        id: 47,
        x: 300,
        y: 170
      },
      {
        id: 48,
        x: 3,
        y: 210
      },
      {
        id: 49,
        x: 36,
        y: 210
      },
      {
        id: 50,
        x: 69,
        y: 210
      },
      {
        id: 51,
        x: 102,
        y: 210
      },
      {
        id: 52,
        x: 135,
        y: 210
      },
      {
        id: 53,
        x: 168,
        y: 210
      },
      {
        id: 54,
        x: 201,
        y: 210
      },
      {
        id: 55,
        x: 234,
        y: 210
      },
      {
        id: 56,
        x: 267,
        y: 210
      },
      {
        id: 57,
        x: 300,
        y: 210
      }
    ],
    partitions: [
      {
        id: 1,
        x: 60,
        y: 5,
        shape_type: "teacherDesk"
      },
      {
        id: 2,
        x: 170,
        y: 0,
        shape_type: "vs1"
      },
      {
        id: 3,
        x: 170,
        y: 35,
        shape_type: "vl1"
      },
      {
        id: 4,
        x: 0,
        y: 120,
        shape_type: "hl1"
      },
      {
        id: 5,
        x: 0,
        y: 160,
        shape_type: "hl2"
      },
      {
        id: 6,
        x: 30,
        y: 135,
        shape_type: "v1"
      },
      {
        id: 7,
        x: 62,
        y: 135,
        shape_type: "v1"
      },
      {
        id: 8,
        x: 94,
        y: 135,
        shape_type: "v1"
      },
      {
        id: 9,
        x: 126,
        y: 135,
        shape_type: "v1"
      },
      {
        id: 10,
        x: 158,
        y: 135,
        shape_type: "vl2"
      },
      {
        id: 11,
        x: 235,
        y: 0,
        shape_type: "vl3"
      },
      {
        id: 12,
        x: 200,
        y: 20,
        shape_type: "h1"
      },
      {
        id: 13,
        x: 200,
        y: 42,
        shape_type: "h1"
      },
      {
        id: 14,
        x: 200,
        y: 64,
        shape_type: "h1"
      },
      {
        id: 15,
        x: 200,
        y: 86,
        shape_type: "h1"
      },
      {
        id: 16,
        x: 200,
        y: 108,
        shape_type: "h1"
      },
      {
        id: 17,
        x: 295,
        y: 20,
        shape_type: "h2"
      },
      {
        id: 18,
        x: 295,
        y: 42,
        shape_type: "h2"
      },
      {
        id: 19,
        x: 295,
        y: 64,
        shape_type: "h2"
      },
      {
        id: 20,
        x: 295,
        y: 86,
        shape_type: "h2"
      },
      {
        id: 21,
        x: 295,
        y: 108,
        shape_type: "h2"
      },
      {
        id: 22,
        x: 200,
        y: 125,
        shape_type: "vm1"
      },
      {
        id: 23,
        x: 234,
        y: 125,
        shape_type: "v2"
      },
      {
        id: 24,
        x: 266,
        y: 125,
        shape_type: "v2"
      },
      {
        id: 25,
        x: 298,
        y: 125,
        shape_type: "v2"
      },
      {
        id: 26,
        x: 204,
        y: 150,
        shape_type: "hl4"
      },
      {
        id: 27,
        x: 200,
        y: 165,
        shape_type: "vm1"
      },
      {
        id: 28,
        x: 234,
        y: 165,
        shape_type: "v2"
      },
      {
        id: 29,
        x: 266,
        y: 165,
        shape_type: "v2"
      },
      {
        id: 30,
        x: 298,
        y: 165,
        shape_type: "v2"
      },
      {
        id: 31,
        x: 204,
        y: 190,
        shape_type: "hl4"
      },
      {
        id: 32,
        x: 0,
        y: 205,
        shape_type: "v3"
      },
      {
        id: 33,
        x: 33,
        y: 205,
        shape_type: "v3"
      },
      {
        id: 34,
        x: 66,
        y: 205,
        shape_type: "v3"
      },
      {
        id: 35,
        x: 99,
        y: 205,
        shape_type: "v3"
      },
      {
        id: 36,
        x: 132,
        y: 205,
        shape_type: "v3"
      },
      {
        id: 37,
        x: 165,
        y: 205,
        shape_type: "v3"
      },
      {
        id: 38,
        x: 198,
        y: 205,
        shape_type: "v3"
      },
      {
        id: 39,
        x: 231,
        y: 205,
        shape_type: "v3"
      },
      {
        id: 40,
        x: 264,
        y: 205,
        shape_type: "v3"
      },
      {
        id: 41,
        x: 297,
        y: 205,
        shape_type: "v3"
      }
    ]
  }
  