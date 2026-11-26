export const ReviewForm = {
    props: {
        modelValue: {
            type: Object,
            required: true
        }
    },
    emits: ['update:modelValue'],
    data() {
        return {
            technologyList: ['HTML', 'CSS', 'JavaScript', 'VueJS']
        };
    },
    methods: {
        change(key, value) {
            this.$emit('update:modelValue', {
                ...this.modelValue,
                [key]: value
            });
        },
        toggleTechnology(technology, checked) {
            const technologies = [...this.modelValue.technologies];
            if (checked && !technologies.includes(technology)) {
                technologies.push(technology);
            } else if (!checked) {
                const index = technologies.indexOf(technology);
                if (index !== -1) {
                    technologies.splice(index, 1);
                }
            }
            this.change('technologies', technologies);
        }
    },
    template: `
        <section>
            <h2>Полный отзыв</h2>
            <div class="form-row">
                <label>Имя пользователя</label>
                <input
                    type="text"
                    :value="modelValue.name"
                    @input="change('name', $event.target.value)">
            </div>
            <div class="form-row">
                <label>Дата рождения</label>
                <input
                    type="date"
                    :value="modelValue.birthday"
                    @input="change('birthday', $event.target.value)">
            </div>
            <div class="form-row">
                <label>Телефон</label>
                <input
                    type="tel"
                    :value="modelValue.phone"
                    @input="change('phone', $event.target.value)">
            </div>
            <div class="form-row">
                <label>E-mail</label>
                <input
                    type="email"
                    :value="modelValue.email"
                    @input="change('email', $event.target.value)">
            </div>
            <div class="form-row technologies">
                <label>Изучаемые технологии</label>
                <label v-for="technology in technologyList" :key="technology">
                    <input
                        type="checkbox"
                        :checked="modelValue.technologies.includes(technology)"
                        @change="toggleTechnology(technology, $event.target.checked)">
                    {{ technology }}
                </label>
            </div>
            <div class="form-row">
                <label>Оценка сайта</label>
                <select
                    :value="modelValue.rating"
                    @change="change('rating', Number($event.target.value))">
                    <option v-for="rating in 10" :key="rating - 1" :value="rating - 1">
                        {{ rating - 1 }}
                    </option>
                </select>
            </div>
            <div class="form-row">
                <label>Отзыв</label>
                <textarea
                    :value="modelValue.comment"
                    @input="change('comment', $event.target.value)"></textarea>
            </div>
        </section>
    `
};
