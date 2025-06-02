<script setup>

    import DiscountCard from '@/components/DiscountCard.vue';

    let Email = 'mail@example.com';

    let Products = [
        {
            id: 1,
            image: 'src/images/home_xmas_product1.jpg',
            name: 'Lorem ipsum dol',
            description: 'Suspendisse sed imperdiet dui, vel egestas urna. Morbi sit amet elit ut elit.',
            discount: '-34'
        },
        {
            id: 2,
            image: 'src/images/home_xmas_product2.jpg',
            name: 'Quantum elle',
            description: 'Dui vel egestas uma. Morbi sit amet elit ut elit mattis efficitur sed.',
            discount: '-40'
        },
        {
            id: 3,
            image: 'src/images/home_xmas_product3.jpg',
            name: 'Triton patual',
            description: 'Curabitur vitae convallis turpis, ut rutrum purus.Ut a dolor tellus',
            discount: '-17'
        },
        {
            id: 4,
            image: 'src/images/home_xmas_product4.jpg',
            name: 'Et viverra auctor',
            description: 'Cras pharetra, dolor et viverra auctor, dul nisi condimentum aliquet metus.',
            discount: '-23'
        },
        {
            id: 5,
            image: 'src/images/home_xmas_product5.jpg',
            name: 'Morbi posuere',
            description: 'Donec blandit, est vestibulum congue pretium, erat augue dictum.',
            discount: '0'
        },
        {
            id: 6,
            image: 'src/images/home_xmas_product6.jpg',
            name: 'Fringilla mollis',
            description: 'Lectus id pellentesque telllus libero a libero!Nullam fringilla mollis.',
            discount: '-50'
        },
    ];

    let clickFunction = function (item) {
        console.log (item);
    };

    // 4. Forms and Event handling
    let ButtonClicked = () => {
        alert('button clicked');
    };


    let KeyDownEvent = () => {
        if (event.key == 'Enter') {
            console.log (Email);
        }
    };

</script>

<template>
    <!-- 
        
        List Rendering
        1. v-for directive
        2. props
        3. emit
        4. Forms and Event handling (v-model)

    -->

    <section class="part2">
        <div class="container">
             <div class="heading">
                <div class="heading1">
                    <img src="../images/home_xmas_sep (1).png" />
                    <h1>Top products discounts</h1>
                    <div class="line"></div>
                </div>
                <div class="heading2">
                    <p>Duis commodo aliquam laculis. Maecenas molestie quam id augue condimentum, ut ornare tortor elementum. Donec luctus at turpis et fringilla. Donec fringilla sed. Sed vel augue aliquet, dignissim.</p>
                    <p>Nunc volutpat lorem in metus rutrum luctus. Pellentesque vel metus dolor. Suspendisse vel pulvinar nisl. Curabitur vitae ligula facilisis, elementum risus amet. Ut dapibus, augue at fringilla posuere.</p>
                </div>
            </div>

            <div class="items">
                <div class="top-items">
                    <ul>
                        <DiscountCard v-for="(product, index) in Products"
                                        :key="index"
                                        :item="product"
                                        @buttonclicked="clickFunction" />
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <!-- Forms and Event handling -->
    <section class="part2">
        <div class="container" style="display: block;padding: 35px 0;margin-top: 40px;">
            
            <button @click="ButtonClicked">Click Me</button>

            <input type="text" placeholder="Enter Email" v-model="Email" @keydown="KeyDownEvent">

        </div>
    </section>

</template>