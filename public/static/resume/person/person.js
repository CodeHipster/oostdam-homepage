import addCss from '../../add-css.js'
import deviceType from '../../device-type.js'

export default Vue.component('person', {
    beforeCreate: function () {
        addCss('static/resume/person/person.css');
    },
    computed:{
        deviceType: function(){
            return deviceType;
        }
    },
    template: `
    <div class="person c-column c-stretch">
        <div class="top i-grow c-column">
            <div class="name i-center" v-show="deviceType != 'desk'">Thijs Oostdam</div>
            <div class='profile-image i-center'>
                <img src="static/resume/profile.png" alt="profile image">
            </div>
            <div class="contact c-column">
                <h2>Contact</h2>
                <div class="icon-text i-grow c">
                    <div class=icon>
                        <img src="static/resume/icon-home.png">
                    </div>
                    <div class="text i-center">The Hague</div>
                </div>
                <div class="icon-text i-grow c">
                    <div class=icon>
                        <img src="static/resume/icon-email.png">
                    </div>
                    <div class="text i-center">
                    oostdam@gmail.com</div>
                </div>
                <div class="icon-text i-grow c">
                    <div class=icon>
                        <img src="static/resume/icon-phone.png">
                    </div>
                    <div class="text i-center">
                    +31626986335</div>
                </div>
                <div class="icon-text i-grow c">
                    <div class=icon>
                        <img src="static/resume/github.png">
                    </div>
                    <div class="text i-center">
                    github.com/codehipster</div>
                </div>
            </div>
            <div class="core-values c-column">
                <h2>Core values</h2>
                <ul>
                    <li>Honesty</li>
                    <li>Kindness</li>
                    <li>Ask yourself why</li>
                    <li>Do it right, do it fast or do not do it</li>
                </ul>
            </div>
        </div>

        <div class="bottom i-grow c-column c-end">
            <div class="languages c-column">
                <h2>Languages</h2>
                <ul>
                    <li>Dutch</li>
                    <li>English</li>
                </ul>
            </div>
            <div class="hobbies c-column">
                <h2>Hobbies</h2>
                <div class="hobbies-container i-grow c">
                    <div class="icon">
                        <img src="static/resume/icon-study.png">
                    </div>
                    <div class="icon">
                        <img src="static/resume/icon-kite.png">
                    </div>
                    <div class="icon">
                        <img src="static/resume/icon-gaming.png">
                    </div>
                </div>
            </div>
        </div>
    </div>`,
    props: ['job']
})