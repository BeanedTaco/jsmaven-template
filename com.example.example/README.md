Example Unicord Marketplace Project
===
This is an example project for a Unicord Marketplace package.

*If you want to try to interface with a bot that's similar to Unicord, try GuideBot.
Unicord was originally based on GuideBot by an Idiot's Guide. Although the core is
now very different from GuideBot, the command template isn't very different. When your
package is provisioned onto the server, we can fix any code that won't work with Unicord.*

## What library and language is Unicord written in?
Unicord v7 is written in ol' Node-flavoured JavaScript. Unicord uses Discord.js, version **12**.

**Please do note that you have to follow the guidelines with functions, and use common sense.
Read the rest of the README for details.**

## I created a Unicord Marketplace package in TypeScript. Can it be used?
**No.** Unicord is JavaScript, not TypeScript. You will need to transpile your build into JavaScript 
before it can be used in production.

## Why is the Unicord Marketplace package manager called JSMaven?
Some of our backend systems and ID systems are inspired by Maven (Gradle and npm as well, but mostly Maven).
That's basically why we named the package manager **JSMaven**.

## I've made a JSMaven package. How can I submit it to Unicord Marketplace for review?

**NOTE: Before you can submit a package, you must join the Unicord Discord server. You can join it [here](https://discord.gg/ZCZuHjk).**

To submit a JSMaven package to Unicord for reviews, email one of these addresses with
**your email**, **your Discord name and tag**, and **a link to your GitHub/GitLab/Git repo**.

- [danny@saturdaynightdead.xyz](mailto:danny@saturdaynightdead.xyz)
- [git@bean.codes](mailto:git@bean.codes)

Or, you can DM *Danny-kun#8860*.

**Danny (a Unicord Developer) reviews all JSMaven packages.**

## I need to access a module. What do I do?
In your ``dependents``, you can add an entry for each NPM/yarn module that you need.
Unicord will handle installing packages, and you can continue working like usual.

**Unicord only accepts modules that are on npm or yarn.**

## Special Methods
``client.loadPackage(commandName, directory)`` - Loads a command from a package

``client.unloadPackage(commandNameWithoutJSExtension, directory)`` - Unloads a command from a package

``client.getSettings(guild)`` - Fetches the settings for a guild

``client.logger.log(string, case)`` - This is the internal logger module. Use this for logging if you need to. Read the Logger Cases List for more details on what the cases are.

### Logger Cases List

- ``cmd`` - Commands. This is self-explanatory.
- ``warn`` - Warnings. These aren't errors, but they inform you that something won't work in future versions of Node, an npm/yarn module, or future versions of Unicord.
- ``error`` - Errors. Very *very* self-explanatory.
- ``debug`` - Debug. This can be used for debugging purposes.
- ``ready`` - This fires on ready. **Ready case logs are NOT allowed to be used, and packages that use ready case logs will get denied as such.**


*Usage of other special methods may lead to your package getting __denied__.
If you need access to another special method, please let Danny know before submitting your package.*
