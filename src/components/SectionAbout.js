import React from 'react'
import Project from '../images/project.png'

function SectionAbout() {
    return (
        <>
            <section className='about-container'>
                <div className='container'>
                    <center><h1>About Us</h1></center>
                    <div className='row row-cols-2 mt-3 gap-5 align-items-center'>
                        <div className='col' style={{width: '500px' }}>
                            <img src={Project} alt='' />
                        </div>
                        <div className='col'>
                            <span>The ability to deliver projects on schedule, on budget, and aligned with business goals is key to gaining an edge in today’s highly competitive global business environment. This is why it is important for the person in charge of the project to have a comprehensive understanding of project management, from basic concepts to extensive experience.

                                Project managers have an incredibly complex assignment, one that blends organizational skills, analytical minds, and adept interpersonal abilities.

                                Many PMs are assisted by project management software and tools that help projects throughout the project life cycle. Wrike can help your business manage goals and objectives, set up Gantt charts and Kanban boards, and much more throughout the project life cycle. Try Wrike today to see how PMs deliver successful projects.

                                In this section, we’ll walk you through the basics of project management and what it means to be a project manager.

                                And, if you are looking for a solution to kick-start your project management journey, you can unlock a free trial with Wrike now.</span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SectionAbout