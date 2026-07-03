---
title: "Just learn SQL"
description: "The secret sauce to succeeding in any corporate environment"
publishedDate: 2026-07-03
tags:
  - tech
---

I'm approaching 7 years at my current gig; in that time I've been a Mid Level Developer, a Senior Level Developer, and now a Tech Lead.
No matter my level of experience, I pride myself on being able to put together a banger SQL query when needed.

I have writen SQL for my job at least daily for the past 7 years. When I was an individual contributor I was writing database queries which 
combined with a micro-ORM like [Dapper](https://github.com/DapperLib/Dapper) served the data access needs of our backend services. 
During my time as a senior developer I can think of multiple times where database queries were the backbone of an urgent recovery scenario, a quick
fix for a production issue, and in many cases the insights I could pull from our SQL databaes was the difference between a project being a success
or a big waste of time and money. As a Tech Lead now, SQL queries are a majority of the reason I'm able to be somewhat useful in my role in-lieu of my
limited time to contribute to our codebases.

This realisation that so much of my job is writing `SELECT` was the stimuli for this post. Every time you hear someone (who often gets paid too much to do too little) tell
you that _"data is the new oil"_ the value of that unoptimised Snowflake worksheet increases.

Excel might be a fundamental skill for any desk jockey but I do really feel that as time goes on SQL is creeping up there. Everything hsa a SQL compatible API, your company
is begging you to do something interesting with that expensive data warehouse. Just understanding the fundamentals of the language is such a powerful thing as the barrier to entry
is continually lowered. Postgres is incredibly forgiving when it comes to throwing unoptimised trash at it, Snowflake doesn't even bother to make you learn what an index is, and even
if you're a poor sod like me and have to work with MSSQL just throw a `NOLOCK` onto the query and kill the query if it takes longer than 30 seconds before trying something different.

AI is also incredibly good at helping to build more complicated queries. If you know how to steer Claude with regards to providing schema samples, documentation for what you're actually querying, and even some basic queries as a reference; you should be able to get what you need with a bit of back and forth.

Do yourself a favour and spend a weekend learning the basics, get yourself read access to the company data warehouse. No time is wasted learning SQL.
