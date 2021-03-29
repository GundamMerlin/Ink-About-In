# Ink-About-It

URL Here

## Project Description

Ink-About-It will be a build based on a Blog-style format that will leverage Airtable and React. Users will be able to view a gallery of tattoos and be able to click on images with the gallery that will lead them to a details page that will give them a story behind each tattoo. There will also be a page for user submission.

## Wireframes

Current wireframe is desktop focused; mobile-focused layout is in the works.
![imageAlt](https://i.imgur.com/weK6BBP.png)
![imageAlt](https://i.imgur.com/CdYxRHk.png)

## Component Hierarchy

![imageAlt](https://i.imgur.com/e53Ut6B.png)

## API and Data Sample

```
{
    "records": [
        {
            "id": "recAc3iyuT3VbeIbZ",
            "fields": {
                "title": "tattoo1",
                "story": "1.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,...",
                "images": "https://i.pinimg.com/originals/9a/a3/a7/9aa3a7b0833b58e3612f9ebe71c226bc.jpg"
            },
            "createdTime": "2021-03-25T19:54:44.000Z"
        },
        {
            "id": "recFHk3Pf648XgAFS",
            "fields": {
                "title": "tattoo2",
                "story": "2.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,...",
                "images": "https://media.timeout.com/images/103464433/630/472/image.jpg"
            },
            "createdTime": "2021-03-25T19:54:44.000Z"
        },
        {
            "id": "rectQ39yLW1RJBS2U",
            "fields": {
                "title": "tattoo3",
                "story": "3.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,...",
                "images": "https://i.pinimg.com/736x/d8/ff/c0/d8ffc05cf9a6608ee5bd3b6f26b4e9ff.jpg"
            },
            "createdTime": "2021-03-25T19:54:44.000Z"
        }
    ],
    "offset": "rectQ39yLW1RJBS2U"
}

```

### MVP/PostMVP

#### MVP

- C: Create option for users to upload title, image and story of tattoo (all 3 form fields would ideally be required )
- R: Get data from Airtable and render it on screen
- Have links on gallery/home link to unique expanded details page
- Achieve clean minimalist style in CSS with some shadowing and card styling so reading medium-long posts is intuitive and viable on all platforms

#### PostMVP

## Project Schedule

| Day       | Deliverable                        | Status     |
| --------- | ---------------------------------- | ---------- |
| Mar 25-26 | Proposal Approval / Airtable Setup | Complete   |
| Mar 27-28 | Components for Get, Post,Delete    | Complete   |
| Mar 28    | CSS Styling                        | Inprogress |
| Mar 29    | CSS Styling / MVP                  | Incomplete |
| Mar 30-31 | Advanced CSS/Testing               | Incomplete |
| April 2   | Presentations                      | Incomplete |

## Timeframe and Priority Matrix

| Component      | Priority | Estimated Time | Time Invested |
| -------------- | :------: | :------------: | :-----------: |
| Proposal       |    H     |      2hrs      |       2       |
| SWOT           |    H     |     1.5hrs     |      1.5      |
| Airtable setup |    H     |     .5hrs      |       1       |
| Rendering Imgs |    H     |       2        |     1.75      |
| Routing        |    H     |      4hr       |     3.25      |
| Building Get   |    H     |      1hr       |      1        |
| Building Post  |    H     |       3hr      |      3.5      |
| Building Delete|    H     |       3hr      |       4       |

## SWOT Analysis

### Strengths:

Create and Read will be the first and easiest part of CRUD
CSS Styling will be fun and challenging (hoping to integrate/research new styling techniques to make the page easy on the eyes)

### Weaknesses:

Still having problems targeting specific information and Link/Routing so that when a user clicks on a image it will send them to a specific page based upon the ID of the tattoo object.
BUTTONS
Not sure how to I'm going to display the images by (my plan was to display the images by descending create time so that most recently posted tattoo object displays first)

### Opportunities:

To strengthen my weaknesses within React both conceptually and technically, work on being able to track my workflow.
Looking to add a new fully fleshed out passion project that is marginally more complex than my first project.

### Threats:

Sometimes I get stuck and throw my plan of attack out the window and start panic coding while not understanding what exactly my code or plan is doing
Trying to shift my workflow and mentality high-low to a fluid slow burn build up.
