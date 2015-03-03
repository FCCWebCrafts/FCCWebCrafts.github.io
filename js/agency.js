/*!
 * Start Bootstrap - Agnecy Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

// Members
var membersData = [
	{
		name: 'Thiago Ferreira',
		image: 'img/team/TF1.jpg',
		description: 'FCC Student and Contributor',
		githubUsername: 'ThiagoFerreir4',
		facebookUsername: 'thiagoferreira.fi',
		linkedInUsername: 'ThiagoFerreir4',
                twitterUsername: 'Ferreir4Thiago'
	},
	{
		name: 'Kapil Dutta',
		image: 'img/team/KD1.jpg',
		description: 'FCC Student and Contributor',
		githubUsername: 'duttakapil',
		facebookUsername: 'duttakapil',
		linkedInUsername: 'duttakapil',
		twitterUsername: 'duttakapil'
	},
	{
		name: 'Cerissa',
		image: 'img/team/c1.jpg',
		description: 'FCC Student and Contributor',
		githubUsername: 'cerissa',
		facebookUsername: 'cerissa.leach.7',
		twitterUsername: 'flagrl20'
	},
	{
		name: 'Serhii',
		image: 'img/team/serhii.jpg',
		description: 'FCC Student and Contributor',
		githubUsername: 'serhiicss',
		twitterUsername: 'Serhiicss',
		googlePlusUrl: 'https://plus.google.com/u/0/113544134561435695482'
	},
	{
		name: 'Germaine P.',
		image: 'img/team/glp-prof.jpg',
		description: 'FCC Student and Contributor',
		githubUsername: 'germainep',
		twitterUsername: 'G_as_in_Genius'
	},
	{
		name: 'Ammar Shah',
		image: 'img/team/Ammar.jpg',
		description: 'FCC Student/Volunteer and Contributor',
		githubUsername: 'AmmarAliShah',
		facebookUsername: 'technofreak24',
		twitterUsername: 'AmmarAliShahK'
	},
	{
		name: 'Kian Moretz',
		image: 'img/team/kian.jpg',
		description: 'FCC Student and Contributor',
		githubUsername: 'meecoder',
		twitterUsername: '7obuIsAwesome',
		googlePlusUrl: 'https://plus.google.com/113139441985488356503'
	},
	{
		name: 'New user',
		image: 'https://pbs.twimg.com/profile_images/562385977390272512/AK29YaTf.png',
		description: 'FCC Student and Contributor'
	}
];
var memberTemplate = _.template($('#memberTemplate').html());
var $members = $('#members');
_.each(membersData, function (memberData) {
	$members.append(memberTemplate(memberData));
})
