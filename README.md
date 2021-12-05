# Prisma with SQLite Error

# Reproduction Steps
 1. Clone this repo
 1. Install all dependencies using Yarn (yarn install)
 1. Run `yarn prisma generate` and then `yarn start`
 1. See "If I got here, something's not working" in console
 1. Install prisma 2 (yarn upgrade prisma@2 @prisma/client@2)
 1. Re-try `yarn start` after `yarn prisma generate`
 1. See no console.errors, and query commits fine
 1. Re-try with prisma @3.0.2 (yarn upgrade prisma@3.0.2 @prisma/client@3.0.2)
 1. See no console.errors, and query commits fine
 1. Re-try with prisma@3.1.1 (yarn upgrade prisma@3.1.1 @prisma/client@3.1.1)
 1. See "If I got here, something's not working" in console, query fails

# Conclusion
I don't know what was changed which would break this query. 