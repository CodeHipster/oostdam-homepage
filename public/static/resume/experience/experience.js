import addCss from '../../add-css.js'
import educationItem from './education-item/education-item.js'
import jobItem from './job-item/job-item.js'
import skillItem from './skill-item/skill-item.js'
import data from './data.js'

export default Vue.component('experience', {
    beforeCreate: function () {
        addCss('static/resume/experience/experience.css');
    },
    components:{  
        'education-item': educationItem,
        'job-item': jobItem,
        'skill-item': skillItem,
    },
    props:[
        'experience'
    ],
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
    <div class="experience">
        <div class=introduction>
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
    </div>`,
    props: ['job']
})