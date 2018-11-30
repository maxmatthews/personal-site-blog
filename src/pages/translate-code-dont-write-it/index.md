---
title: Stop trying to “write code” and focus on “translating to code”
date: "2017-02-13"
featuredImage: './sfcpic.jpeg'
---
## The Power of Pseudo Code

> **TL;DR: **No one can write code without planning first, whether they want to
> admit it or not. Here’s my story that made me realize the importance of planning
out your code, and how much more efficient it makes you. Start off thinking
**what** you want to accomplish, not **how** to write it, especially as a
beginner.

For the past several months, I’ve had the incredible opportunity to mentor at
[StartFast Code](http://startfastcode.com/). As an instructor at Syracuse’s only
coding bootcamp, I’ve noticed trends in how students learn. We use
[freeCodeCamp](http://freecodecamp.com/)’s (FCC) curriculum, which not only
covers great topics for beginner developers, it also teaches you **how** to
learn.

The story of how to become a developer is different for everyone, mainly because
it’s a very personal process. Some people learn better from books, others prefer
video tutorials, and some just dive into documentation. But at the end of the
day, you need to apply your knowledge to fully grasp it, and that’s when FCC
challenges are perfect.

Regardless of how you learn, I consistently see students struggle with one
concept. They think becoming a master developer means they can *write* code. But
I’m here to tell you a dirty little secret:

> **No one**, not even Mark Zuckerberg, can “*write*” code

Professional developers are just really good at **translating** code. Let me
explain…

When handed a project to complete, it’s easy to get overwhelmed with the size of
the project. Sure, you may know how to complete all the requirements, but where
do you even start?

The first step in any project is breaking it down into tasks, and even subtasks,
then ordering them. At the end of the process you know exactly where to start,
and suddenly, the project’s huge size is no longer a concern.

But you have to take it just one step further before you can start writing code:
break down what you’re trying to accomplish in sentences. No one’s brain can
write code, it’s not humanly possible to think that way. What it can do,
however, is realize what you’re trying to get the computer to accomplish, then
translate that task into code.

Some students figure this technique out on their own, even if it’s
subconsciously and they don’t realize they are doing it. Hell, I would bet most
professional developers have never thought about what their brain is doing when
they are “writing” (translating) code.

Let me give you an example. Last night I was helping a student on [“Where do I
belong,”](https://www.freecodecamp.com/challenges/where-do-i-belong) a FCC
challenge. He was getting lost in the javascript documentation trying to figure
out how to complete the exercise. After working with the student for two months,
I knew he had the knowledge to complete the task, but lacked the confidence to
dive in.

Here’s the code we came up with together to solve the problem:

    function getIndexToIns(arr, num) {
     sortedArray = arr.sort(function(a, b) {
       return a — b;
     });
     console.log(sortedArray);
     for (var i = 0; i < sortedArray.length; i++) {
       if (num <= sortedArray[i]){
         return i;
       }
     }
     
     return sortedArray.length; 
    }

Ten lines of code solved the problem, but then you can’t write those ten lines
unless you do this first:

* First we need to sort the array. Hey, there’s a FCC tip on Array.prototype.sort!
* JS doesn’t know how to sort arrays, so we need an algorithm that will tell it
how.
* Let’s `console.log` out the array to make sure it’s sorted.
* We need to figure out where it goes in the sorted array. We’ll do that with a
loop over the sorted array.
* Now in the loop, let’s see if the number we’re on in the sorted array is less
than or equal to the number passed in the parameter.
* If it is, we have found the index we are going to insert the number in. Since we
found it, return it and stop the loop.
* But what happens if it never finds an index? We need a way to return the correct
index if the number is larger than any other in the array.

After thinking through these steps, the student very competently translated
these sentences into real code and completed the challenge in a couple of
minutes.

OK, you made it this far in the article, so you must be wondering about my
subtitle: “The Power of Pseudo Code.” You may have heard people talk about
pseudo code, but what is it, and more importantly, how do I use it?

Pseudo code is a shorthand that developers use to write out code during the
planning process, often on a whiteboard or another non-keyboard driven medium.
It doesn’t have to be syntactically perfect, but it gets your thoughts out of
your head without having to worry about the computer understanding it. Sound
familiar? It’s *exactly* what my process says to do above. Instead of writing
out full out sentences, you can cheat a bit and write out methods you already
know how to use.

After going through this process with the student, and thoroughly discussing it,
several other more advanced students chimed in and said how important these
steps were to their own development processes. One shared that the “secret” to
his debugging process was translating his code *back* to sentences, which helped
him find problems much sooner.

Embracing the need for a planning phase before writing a line of code is the
always the first step. No matter how big or small the challenge, task, project,
or app, translating **will** speed up your programming time. I
[promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

> Please comment or feel free to reach out to [me](https://maxmatthe.ws/). If I
> can manage to peel myself away from mentoring aspiring developers and
entrepreneurs, I’m working on freelance full stack development jobs. I’m always
open to opportunities to do more mentoring, whether it’s in Syracuse, NY or
remote!