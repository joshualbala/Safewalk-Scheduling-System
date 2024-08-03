
const { Prisma, Hours} = require('@prisma/client');

const users = [
    {
        id: 0,
        email: "mengistie_hailemariam@brown.edu",
        regularHours: [Hours.mon911, Hours.tues911],
        inHours: [],
        availHours: []
    },

    {
        id: 1,
        email: "joshua_bala@brown.edu",
        regularHours: [Hours.sat911, Hours.sat1012],
        inHours: [],
        availHours: []
    }
]

module.exports = {
    users
  }