## Safewalk Scheduling System

## Project Description:

The Safewalk Scheduling System aims to streamline the process of managing shift changes and availability for Safewalk staff. The current process relies heavily on email exchanges and manual updates, causing inefficiencies, inbox clutter, and additional workload for supervisors. This platform seeks to reduce the number of emails required and simplify the scheduling process for Safewalk staff.

## General User Experience:

Allows all Safewalk staff to mark their weekly availability, sub-out shifts, and sub-in for available shifts.
Features include a grid-style availability page where users can highlight operational hours they are available to work and easily update their status. Users will only receive notifications about available shifts matching their indicated availability.
The Sub-in and Sub-out pages simplify managing shifts by presenting current shifts in an interactive calendar format. 

## Key Features:

- Availability Page: A user-friendly interface for marking availability in an 8x4 grid format. The system defaults to assume all-time availability unless specified by the user.
- Sub-In and Sub-Out Pages: Interactive calendar-style interfaces for managing shifts with real-time data on available openings and assigned shifts.

## Goals:

- Minimize the number of emails sent to staff.
- Reduce workload on supervisors by automating parts of the scheduling process.
- Provide a centralized platform for Safewalk staff to manage availability and shifts efficiently.

4. Tech stack
Just don’t add every library you used. I think it’s fine to add a library if you believe that it conveys your skillset as a developer.

Firebase, Tailwind, React, Next.js
5. Steps on how to get your project up and running on someone else’s machine
Write out a step-by-step guide on how I could run your project on my computer.

## Sign In Page
![alt text](<Screenshot 2025-01-05 at 9.23.29 PM.png>)
- This page featues an interative sign in console and the Safewalk logo in the background. Using Googles Firebase authentication the user can only sign in if their username and password is stored in the database. The sign in page is the default page and an hour after sign in their authenication expires which routes them to the sign in page again. If the username or password is wrong it will prompt an error message to display prompting the user to retry.
![alt text](<Screenshot 2025-01-05 at 9.28.58 PM.png>)

## Availability Page
![alt text](<Screenshot 2025-01-05 at 9.35.13 PM.png>)
- Once signed in the user is routed to the availability page. This page allows users to input when they are avialble so they only recieve sub request emails for the corresponding times. An X means that the user isn't available at that time and a green square means they are available. For example in the image above I am available Sunday: 9 - 11, Monday 12:15 - 2:15, Tuesday 12:15 - 2:15, etc... Futhermore, the time slots in the top corner are blank becuase Safewalk doesn't operate Friday and Saturday 9 - 11. If the user changes their avaiability they are prompted with a submit button that saves the new availailty to our Firebase database and reloads the page with the updated information. 
![alt text](<Screenshot 2025-01-05 at 9.43.55 PM.png>)

## Sub-Out Page
![alt text](<Screenshot 2025-01-05 at 9.41.44 PM.png>)
- Once you click the Sub-Out button in top header you are linked to the Sub-out Page. This page has a simialar grid layout as the availabilty pages and shows all the shifts that you are currently scheduled to work. All the red squares are shifts that you can sub out of and if you do choose to sub out of a shift you are prompted with a similar submit button as the availability page. Once the submit button is clicked an email will be sent to all safewalkers that indicated they are available at that time. Then, the information will be saved in the Firebase database, and the page will reload with updated information.

## Sub-In Page
![alt text](<Screenshot 2025-01-05 at 9.52.05 PM.png>)
- The Sub-In page uses the same grid layout and shows all shifts that are free for a Safewalk to sub into. Similar to the other pages, once you click on any blue square you will be prompted with a sumbit button that updates the database and reloads the page. The sub-in and sub-out pages are effectively inverses of each other and update each time the other page is updated. For example if a Safewalker subs out of Sunday: 12:15 - 2:15 then the sub-in page will update to include that as a shift they can sub in to. 

## Layout
![alt text](<Screenshot 2025-01-05 at 11.01.44 PM.png>)
- Each page handles screen minimzation and for the sub in/sub out/availability the grid rotates to fit a smaller screen. 


## Most difficult aspect of the project
The most difficult aspect for both of us was the continuous learning each step required. Whether it was learning what exactly a promise was in order to fetch information from the database, re-building the project in order to implement Tailwind, or even using Tailwind itself, this project was filled with learning about new things that we didn't get a full picutre of until we were over each hurdle. This, in turn, made this project very difficult to come back to, for most of the work we would leave for next time (next time ranging from a day to 5 months) would require us to re-learn a lot. Fortunately, after a week-long push after Christmas, we are able to show this project off today. 

## Future Updates
- Adding an email API to send the emails out on sub-outs, (this is mostly a question of whether or not safewalk has an emailing service already or not).

- Resetting availibility and current shifts at the beginning of each week so that staff can sub in and out accordingly.

- Adding a system to handle subbing in/out of shifts farther in the future

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
