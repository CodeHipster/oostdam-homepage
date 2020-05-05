export default Vue.component('skill-item', {
    template: `
    <div class="skill">
        <div :style='opacity'>{{skill.name}}</div>
    </div>`,
    props: ['skill'],
    computed: {
        opacity: function () {
            return 'opacity: ' + this.skill.level / 100;
        }
    }
})