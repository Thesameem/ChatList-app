<script setup>

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

</script>

<template>
    <!-- 
        
        List Rendering
        1. v-for directive
        2. props
        3. emit
        4. Forms and Event handling

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
                        <li v-for="(product, index) in Products" :key="index">
                            <img :src="product.image" />
                            <span v-if="product.discount != '0'">{{ product.discount }}%</span>
                            <h3>{{ product.name }}</h3>
                            <p>{{ product.description }}</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>



</template>

<style>

section.part2 div.container{
    width: 1050px;
    margin: 0px auto;
    display: flex;
    flex-direction: column;
    gap: 50px;
}
section.part2 div.heading{
    display: flex;
    flex-direction: column;
    gap: 30px;
}
section.part2 div.heading1{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
}
section.part2 div.heading1 h1{
    font-size: 55px;
    font-weight: 800;
    letter-spacing: 3px;
    text-transform: uppercase;
    font-family: 'Poppins',sans-serif;
    color: hsl(235.14deg 24.5% 29.61%);
}
section.part2 div.heading div.heading1 div.line{
    width: 500px;
    padding: 2px;
    background-color: hsl(178.29deg 35.35% 61.18%);
}
section.part2 div.heading div.heading2{
    display: flex;
    gap: 30px;
}
section.part2 div.heading div.heading2 p{
    font-size: 13px;
    font-weight: lighter;
}
section.part2 div.heading div.heading2 p:nth-child(1){
    text-align: right;
}
section.part2 div.heading div.heading2 p:nth-child(2){
    text-align: left;
}
section.part2 div.items{
    display: flex;
    flex-direction: column;
    gap: 40px;
}
section.part2 div.items div.top-items ul{
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
}
section.part2 div.items div.top-items ul li{
    width: 32%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
}
section.part2 div.items div.top-items ul li span{
    padding: 3px;
    background-color: red;
    color: white;
    border-radius: 5px;
}
section.part2 div.items div.top-items ul li h3{
    color: hsl(235.14deg 24.5% 29.61%);
    font-size: 25px;
}
section.part2 div.items div.top-items ul li p{
    text-align: center;
    font-size: 13px;
    width: 84%;
}

section.part2 div.items div.bottom-items ul{
    display: flex;
    gap: 20px;
}
section.part2 div.items div.bottom-items ul li{
    width: 33%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
}
section.part2 div.items div.bottom-items ul li span{
    padding: 3px;
    background-color: red;
    color: white;
    border-radius: 5px;
}
section.part2 div.items div.bottom-items ul li h3{
    color: hsl(235.14deg 24.5% 29.61%);
    font-size: 25px;
}
section.part2 div.items div.bottom-items ul li p{
    text-align: center;
    font-size: 13px;
    width: 85%;
}

</style>