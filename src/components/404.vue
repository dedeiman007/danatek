<template>
    <div id="notfound">
		<div class="notfound-bg"></div>
		<div class="notfound text-center mt-5">
			<div class="notfound-404">
				<h1>404</h1>
			</div>
			<h2>we are sorry, but the page you requested was not found</h2>
			<router-link :to="{name:'/'}" class="home-btn">Go Home</router-link>
			<router-link :to="{name:'contact'}" class="contact-btn">Contact us</router-link>
		</div>
	</div>
</template>