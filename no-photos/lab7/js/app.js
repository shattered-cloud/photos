import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";
import { ReviewList } from "./ReviewList.js";
import { ReviewForm } from "./ReviewForm.js";

createApp({
    components: {
        ReviewList,
        ReviewForm
    },
    data() {
        return {
            reviews: [],
            selectedIndex: null
        };
    },
    computed: {
        averageRating() {
            if (this.reviews.length === 0) {
                return "0.00";
            }
            const sum = this.reviews.reduce((total, review) => {
                return total + Number(review.rating);
            }, 0);
            return (sum / this.reviews.length).toFixed(2);
        },
        selectedReview: {
            get() {
                return this.selectedIndex === null
                    ? null
                    : this.reviews[this.selectedIndex];
            },
            set(newValue) {
                if (this.selectedIndex !== null) {
                    this.reviews[this.selectedIndex] = newValue;
                }
            }
        }
    },
    methods: {
        selectReview(index) {
            this.selectedIndex = index;
        },
        addReview() {
            this.reviews.push({
                name: "",
                birthday: "",
                phone: "",
                email: "",
                technologies: [],
                rating: 0,
                comment: ""
            });
            this.selectedIndex = this.reviews.length - 1;
        }
    }
}).mount("#app");
