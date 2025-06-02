<script setup>

    import { ref } from 'vue';

    const FAQAnswers = ref([
            {
                  id : 1,
                  title : 'How can I make a reservation?',
                  content : 'You can make a reservation online by clicking the Order Online button on our homepage, or by calling us at. Please note that we require a credit card to secure your reservation, and we have a 24-hour cancellation policy.',
                  active: true
            },
            {
                  id : 2,
                  title : 'Do you offer any vegetarian, vegan, or gluten-free options?',
                  content : 'Yes, we do. We have a variety of dishes that are suitable for vegetarians, vegans, or gluten-free diets. If you have any specific dietary requirements or allergies, please let us know when you make your reservation or order your food.',
                  active: false
            },
            {
                  id : 3,
                  title : 'Do you have a dress code?',
                  content : 'We do not have a formal dress code, but we kindly ask our guests to dress smart casual. Please avoid wearing flip-flops, shorts, tank tops, or hats. We want you to feel comfortable and enjoy your dining experience.',
                  active: false
            },
            {
                  id : 4,
                  title : 'Do you offer catering or private events?',
                  content : 'Yes, we do. We can cater for any occasion, from corporate meetings to weddings, and we can accommodate up to 50 guests in our private dining room. Please contact us at  or email us at to discuss your needs and get a quote.',
                  active: false
            }
      ]);


      let MakeActive = (faq) => {
        FAQAnswers.value.map(element => {
            if (faq.id == element.id) element.active = true;
            else element.active = false;
        });
      };

</script>

<template>

<section class="faqs">
    <div class="wrapper faqwraper">
            <h2>Answers to our frequently asked questions.</h2>
            <ul>
                <li v-for="faq in FAQAnswers" :key="faq.id" @click="MakeActive(faq)">
                    <div class="title">
                        <h4>{{ faq.title }}</h4>
                        <span>
                            <img v-if="faq.active" src="./../../images/up.svg">
                            <img v-else src="./../../images/right.svg">
                        </span>
                    </div>
                    <div v-if="faq.active" class="content">
                        <p>{{ faq.content }}</p>
                    </div>
                </li>
            </ul>    
    </div>
</section>

</template>

<style scoped>

section.faqs {
    background-color: #252a34;
    padding: 75px 0
}

div.faqwraper {
    width: 720px;
    margin: 0 auto
}

section.faqs h2 {
    font-size: 36pt;
    color: #fff;
    font-weight: 100;
    margin-bottom: 45px
}

section.faqs ul {
    display: flex;
    flex-direction: column;
    justify-content: center
}

section.faqs ul>li {
    border-top: 1px solid #595959;
    border-bottom: 1px solid #595959;
    display: flex;
    flex-direction: column
}

section.faqs ul>li div.title {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 70px;
    border-bottom: 1px solid #595959;
    cursor: pointer
}

section.faqs ul>li div.title h4 {
    color: #fff;
    font-size: 16pt;
    letter-spacing: .25px;
    font-weight: 400
}

section.faqs ul>li div.title span {
    width: 15px;
    height: 20px;
    margin-right: 12px
}

section.faqs ul>li div.title span img {
    width: 100%;
    height: 100%;
    object-fit: contain
}

section.faqs ul>li div.content {
    padding: 20px 0
}

section.faqs ul>li div.content p {
    color: #d9d9d9;
    font-size: 14pt;
    line-height: 24pt;
    letter-spacing: .15px;
    font-weight: lighter
}

</style>