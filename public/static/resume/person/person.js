import deviceType from '../../device-type.js'

export default Vue.component('person', {
    computed:{
        deviceType: function(){
            return deviceType;
        }
    },
    template: `
    <div class="person">
        <div class=top>
            <div class=name v-if="deviceType != 'desk'">Thijs Oostdam</div>
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
    </div>`,
    props: ['job']
})