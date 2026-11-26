export const ReviewList = {
    props: {
        reviews: {
            type: Array,
            required: true
        },
        selectedIndex: {
            type: Number,
            default: null
        },
        averageRating: {
            type: String,
            required: true
        }
    },
    emits: ['select', 'add'],
    template: `
        <section>
            <h2>Список отзывов</h2>
            <p>Средняя оценка сайта: <strong>{{ averageRating }}</strong></p>
            <table>
                <thead>
                    <tr>
                        <th>Имя</th>
                        <th>Дата рождения</th>
                        <th>Технологии</th>
                        <th>Оценка</th>
                    </tr>
                </thead>
                <tbody>
                    <tr
                        v-for="(review, index) in reviews"
                        :key="index"
                        :class="{ selected: selectedIndex === index }"
                        @click="$emit('select', index)">
                        <td>{{ review.name }}</td>
                        <td>{{ review.birthday }}</td>
                        <td>{{ review.technologies.join(', ') }}</td>
                        <td>{{ review.rating }}</td>
                    </tr>
                </tbody>
            </table>
            <button @click="$emit('add')">Добавить отзыв</button>
        </section>
    `
};
