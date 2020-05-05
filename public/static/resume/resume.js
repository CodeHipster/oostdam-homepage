import addCss from '../add-css.js'
import educationItem from './education-item/education-item.js'
import jobItem from './job-item/job-item.js'
import skillItem from './skill-item/skill-item.js'
import data from './data.js'

export default {
    beforeCreate: function () {
        addCss('static/resume/resume.css');
        addCss('static/resume/print.css', 'print');
    },
    components: {
        'education-item': educationItem,
        'job-item': jobItem,
        'skill-item': skillItem,
    },
    computed: {
        sortedHardSkills: function () {
            return this.skills.hard.sort((a, b) => b.level - a.level);
        },
        sortedSoftSkills: function () {
            return this.skills.soft.sort((a, b) => b.level - a.level);
        }
    },
    data: function(){return data;},
    template: `
    <div class=resume>
        <div class=content>
            <div class="person">
                <div class=top>
                    <div class='profile-image'>
                        <img src="static/resume/profile.png" alt="profile image">
                    </div>
                    <div class=contact>
                        <h2>Contact</h2>
                        <div class='icon-text'>
                            <div class=icon>
                                <img src="static/resume/icon-home.png">
                            </div>
                            <div class=text>
                            Houtrustweg 321
                                <br>2583 LL The Hague</div>
                        </div>
                        <div class='icon-text'>
                            <div class=icon>
                                <img src="static/resume/icon-email.png">
                            </div>
                            <div class=text>
                            oostdam@gmail.com</div>
                        </div>
                        <div class='icon-text'>
                            <div class=icon>
                                <img src="static/resume/icon-phone.png">
                            </div>
                            <div class=text>
                            +31626986335</div>
                        </div>
                        <div class='icon-text'>
                            <div class=icon>
                                <img src="static/resume/github.png">
                            </div>
                            <div class=text>
                            github.com/codehipster</div>
                        </div>
                    </div>
                    <div class=core-values>
                        <h2>Core values</h2>
                        <ul>
                            <li>Honesty</li>
                            <li>Kindness</li>
                            <li>Ask yourself why</li>
                            <li>Do it right, do it fast or do not do it</li>
                        </ul>
                    </div>
                </div>

                <div class=bottom>
                    <div class=languages>
                        <h2>Languages</h2>
                        <ul>
                            <li>Dutch</li>
                            <li>English</li>
                        </ul>
                    </div>
                    <div class=hobbies>
                        <h2>Hobbies</h2>
                        <div class=hobbies-container>
                            <div class=icon>
                                <img src="static/resume/icon-study.png">
                            </div>
                            <div class=icon>
                                <img src="static/resume/icon-kite.png"></div>
                            <div class=icon>
                                <img src="static/resume/icon-gaming.png"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="experience">
                <div class=introduction>
                    <div class=name>Thijs Oostdam</div>
                    <div class=title>Full Stack Developer</div>
                </div>
                <hr>

                <div>
                    <h2>Education</h2>
                    <div>
                        <h3>Courses</h3>
                        <education-item v-for="education in courses" :key="education.date" :education="education">
                        </education-item>
                    </div>
                    <div>
                        <h3>Studies</h3>
                        <education-item v-for="education in studies" :key="education.date" :education="education">
                        </education-item>
                    </div>
                </div>
                <hr>
                <div>
                    <h2>Work experience</h2>
                    <div class=row-wrap-start>
                        <job-item v-for="job in jobs" :key="job.company + job.role" :job="job">
                        </job-item>
                    </div>
                </div>
                <hr>
                <div>
                    <h2>Skills</h2>
                    <div class=row-wrap-start>
                        <skill-item v-for="(skill, index) in sortedHardSkills" :key="skill.name" :skill="skill"
                            v-bind:class="{ 'dark-yellow': index % 2 == 1, 'light-yellow': index % 2 == 0}">
                        </skill-item>
                        <skill-item v-for="(skill, index) in sortedSoftSkills" :key="skill.name" :skill="skill"
                            v-bind:class="{ 'dark-blue': index % 2 == 1, 'light-blue': index % 2 == 0}">
                        </skill-item>
                    </div>
                </div>
            </div>
        </div>
    </div>`
}