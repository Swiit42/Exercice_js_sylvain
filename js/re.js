

let container = document.createElement('div');

container.setAttribute('class' , 'container');

let star = document.createElement('span');

star.setAttribute('class', 'star');

star.innerHTML = '★';

let body = document.querySelector("body");

// site_header_clearfix
let site_section = document.createElement('div');

site_section.setAttribute('class', 'site-section');

let site_section2 = document.createElement('div');

site_section2.setAttribute('class', 'site-section');


let other_projects_li = document.createElement('li');
let other_projects_lien = document.createElement('a');
other_projects_lien.setAttribute('href', 'https://h5bp.org/');
other_projects_lien.innerHTML +='Other projects';
other_projects_li.appendChild(other_projects_lien);


let docs_li = document.createElement('li');
let docs_lien = document.createElement('a');
docs_lien.setAttribute('href', 'https://github.com/h5bp/html5-boilerplate/blob/v8.0.0/dist/doc/TOC.md');
docs_lien.innerHTML ='Docs';
docs_li.appendChild(docs_lien);


let source_code_li = document.createElement('li');
let source_code_lien = document.createElement('a');
source_code_lien.setAttribute('href', 'https://github.com/h5bp/html5-boilerplate');
source_code_lien.innerHTML ='Source code';
source_code_li.appendChild(source_code_lien);



let site_nav_inline_block_list = document.createElement('ul');
site_nav_inline_block_list.setAttribute('class' , 'site-nav inline-block-list');
site_nav_inline_block_list.appendChild(source_code_li);
site_nav_inline_block_list.appendChild(docs_li);
site_nav_inline_block_list.appendChild(other_projects_li);


let site_logo = document.createElement('div');
site_logo.setAttribute('class', 'site-logo');
site_logo.innerHTML += 'HTML5 ';
site_logo.appendChild(star);
site_logo.innerHTML += ' Boilerplate';

// site promo

let the_web_most = document.createElement('h1');
the_web_most.innerHTML += "The web's most popular front-end template";


let description = document.createElement('p');
description.setAttribute('class', 'description');
description.innerHTML +='HTML 5 Boilerplate helps you build fast, robust, and adaptable web apps or sites. Kick-start yout project with the combines knowledge and effort of 100s of developers, all in one little package.';


let cta_option = document.createElement('div');
cta_option.setAttribute('class', 'cta-option');


let download = document.createElement('strong');
download.innerHTML += 'Download ';

let version = document.createElement('span');
version.setAttribute('class', 'version');
version.innerHTML += 'v8.0.0';

let btn_btn_download = document.createElement('a');
btn_btn_download.setAttribute('class', 'btn btn-download');
btn_btn_download.setAttribute('href', 'https://github.com/h5bp/html5-boilerplate/releases/download/v8.0.0/html5-boilerplate_v8.0.0.zip');

btn_btn_download.appendChild(download);
btn_btn_download.appendChild(version);

cta_option.appendChild(btn_btn_download);

cta_option.appendChild(btn_btn_download);
site_section.appendChild(cta_option);



let site_promo = document.createElement('div');
site_promo.setAttribute('class', 'site-promo');
site_promo.appendChild(the_web_most);
site_promo.appendChild(description);
site_promo.appendChild(cta_option);


let site_header_clearfix = document.createElement('div');
site_header_clearfix.setAttribute('class' , 'site-header clearfix');
site_header_clearfix.appendChild(site_logo);
site_header_clearfix.appendChild(site_nav_inline_block_list);

// fin de creation de la première div

container.appendChild(site_header_clearfix);
container.appendChild(site_promo);


// site-header clearfix fini

// Manque strong

// Manque strong

// Manque CHANGELOG

// Fin container






let normalize_href = document.createElement('a');

normalize_href.setAttribute('href', 'https://necolas.github.io/normalize.css/');

let normalize = document.createElement('h3');
let analytics = document.createElement('h3');
let modernizr = document.createElement('h3');
let performance = document.createElement('h3');



let includes = document.createElement('p');
let a_lean = document.createElement('p');
a_lean.innerHTML = 'A lean, mobile-friendly HTML template; optimized Google Analytics snippet; placeholder touch-device icon; and docs covering dozens of extra tips and tricks.';
normalize_href.innerHTML += 'Normalize.css';


analytics.appendChild(star);
normalize.appendChild(star);
modernizr.appendChild(star);
performance.appendChild(star);

analytics.innerHTML += 'Analytics, icons, and more';
normalize.innerHTML += 'Normalize.css and helpers';
modernizr.innerHTML += 'Modernizr';
performance.innerHTML += 'High performance';


let get_the_latest = document.createElement('p');


let http_modernizr = document.createElement('a');

http_modernizr.setAttribute('href', 'https://modernizr.com/');

http_modernizr.innerHTML += 'Modernizr';
includes.innerHTML += 'Includes ';

includes.innerHTML += ' a modern, HTML5-ready alternative to CSS resets — and further base styles, helpers, media queries, and print styles.';

get_the_latest.innerHTML += 'Get the latest minified versions of Modernizr: ';


get_the_latest.innerHTML += ' feature detection library, complete with a custom build configuration';

let apache = document.createElement('p');


let server_config = document.createElement('a');

server_config.setAttribute('href', 'https://github.com/h5bp/server-configs');

server_config.innerHTML += 'server config';

apache.innerHTML += 'Apache settings to help you deliver excellent site performance. We independently maintain ';

apache.innerHTML += ' for multiple forms';

// // Site section fini

let site_section_site_section_video = document.createElement('div');

site_section_site_section_video.setAttribute('class', 'site-section site-section-video');


let introduction = document.createElement('h2');

introduction.innerHTML += 'Introduction to v8';


let content = document.createElement('div');

content.setAttribute('class', 'content');


let whats_new = document.createElement('p');

whats_new.setAttribute('class','new');

whats_new.innerHTML += 'What\'s new ?';


let whats_new_ul = document.createElement('ul');

whats_new_ul.setAttribute('class', 'new');


let whats_new_li1 = document.createElement('li');


whats_new_li1.innerHTML += 'Added a sample package.json with basic Parcel commands to jump start your app development';

let whats_new_li2 = document.createElement('li');


whats_new_li2.innerHTML += 'Added sample Open Graph metadata';

let whats_new_li3 = document.createElement('li');


whats_new_li3.innerHTML += 'Updated Modernizr and main.css';

let whats_new_li4 = document.createElement('li');


whats_new_li4.innerHTML += 'Removed jQuery';

let whats_new_li5 = document.createElement('li');


whats_new_li5.innerHTML += 'Set anonymizeIp to true in Google Analytics snippet';

let whats_new_li6 = document.createElement('li');


whats_new_li6.innerHTML += 'Removed Browser Upgrade Prompt';

let whats_new_li7 = document.createElement('li');


let whats_new_li7_href = document.createElement('a');

whats_new_li7_href.innerHTML += 'Check out the Changelog for all the details.';

whats_new_li7_href.setAttribute('href', 'https://github.com/h5bp/html5-boilerplate/blob/master/CHANGELOG.md');

whats_new_li7.innerHTML += 'That\'s just the start of all the goodness. ';


////////////////////////////////////////////////////////////////////////

// Site section site-section-video fini

let who_uses = document.createElement('h2');



who_uses.innerHTML += 'Who uses HTML5 Boilerplate?';

let in_the_wild = document.createElement('p');

in_the_wild.setAttribute('class', 'in-the-wild');


let microsoft = document.createElement('a');

microsoft.setAttribute('href', 'https://www.microsoft.com/surface/');

let nasa = document.createElement('a');

nasa.setAttribute('href', 'https://data.nasa.gov/');

let nike = document.createElement('a');

nike.setAttribute('href', 'http://www.nikeskateboarding.com/');

let barack_obama = document.createElement('a');

barack_obama.setAttribute('href', 'https://www.barackobama.com/');

let itv_news = document.createElement('a');

itv_news.setAttribute('href', 'https://www.itv.com/news/');

let creative_commons = document.createElement('a');

creative_commons.setAttribute('href', 'https://creativecommons.org/');

let australia_post = document.createElement('a');

australia_post.setAttribute('href', 'https://auspost.com.au/');

let many_more = document.createElement('a');

many_more.setAttribute('href', 'https://github.com/h5bp/html5-boilerplate/wiki/sites');

microsoft.innerHTML += 'Microsoft';
nasa.innerHTML += 'Nasa';
nike.innerHTML += 'Nike';
barack_obama.innerHTML += 'Barack Obama';
itv_news.innerHTML += 'ITV News';
creative_commons.innerHTML += 'Creative Commons';
australia_post.innerHTML += 'Australia Post';
many_more.innerHTML += ' many more';




let inline_block_list = document.createElement('ul');

inline_block_list.setAttribute('class', 'inline-block_list');

includes.appendChild(normalize_href);


get_the_latest.appendChild(http_modernizr);


apache.appendChild(server_config);

site_section_site_section_video.appendChild(introduction);

site_section_site_section_video.appendChild(content);

content.appendChild(whats_new);

content.appendChild(whats_new_ul);

whats_new_ul.appendChild(whats_new_li1);

whats_new_ul.appendChild(whats_new_li2);

whats_new_ul.appendChild(whats_new_li3);

whats_new_ul.appendChild(whats_new_li4);

whats_new_ul.appendChild(whats_new_li5);

whats_new_ul.appendChild(whats_new_li6)

whats_new_ul.appendChild(whats_new_li7);

whats_new_li7.appendChild(whats_new_li7_href);

site_section2.appendChild(who_uses);


site_section2.appendChild(in_the_wild);

in_the_wild.appendChild(microsoft);
in_the_wild.innerHTML += ', ';
in_the_wild.appendChild(nasa);
in_the_wild.innerHTML += ', ';
in_the_wild.appendChild(nike);
in_the_wild.innerHTML += ', ';
in_the_wild.appendChild(barack_obama);
in_the_wild.innerHTML += ', ';
in_the_wild.appendChild(itv_news);
in_the_wild.innerHTML += ', ';
in_the_wild.appendChild(creative_commons);
in_the_wild.innerHTML += ', ';
in_the_wild.appendChild(australia_post);
in_the_wild.innerHTML += ', ';
in_the_wild.appendChild(many_more);
in_the_wild.innerHTML += ', and';
in_the_wild.appendChild(many_more);
in_the_wild.innerHTML += '.';


// save_time

let save_time = document.createElement('h2');
save_time.innerHTML += 'Save time. Create with confidence.';

// grid

let grid = document.createElement('div');
grid.setAttribute('class', 'grid');

let grid_cell = document.createElement('div');
grid_cell.setAttribute('class', 'grid-cell');
let grid_cell2 = document.createElement('div');
grid_cell2.setAttribute('class', 'grid-cell');
let grid_cell3 = document.createElement('div');
grid_cell3.setAttribute('class', 'grid-cell');
let grid_cell4 = document.createElement('div');
grid_cell4.setAttribute('class', 'grid-cell');

grid_cell.appendChild(analytics);
grid_cell.appendChild(a_lean);

grid.appendChild(grid_cell);


grid_cell2.appendChild(normalize);
grid_cell2.appendChild(includes);

grid.appendChild(grid_cell2);


grid_cell3.appendChild(modernizr);
grid_cell3.appendChild(get_the_latest);

grid.appendChild(grid_cell3);


grid_cell4.appendChild(performance);
grid_cell4.appendChild(apache);

grid.appendChild(grid_cell4);

let container_site_section = document.createElement("div")
container_site_section.setAttribute('class', 'container')

container_site_section.appendChild(save_time);
container_site_section.appendChild(grid);

site_section.appendChild(container_site_section)

// container.appendChild(aside);
// container.appendChild(inline_block_list);
// Aside

let aside = document.createElement('div');
aside.setAttribute('class','aside');

let container3 = document.createElement('div');
container3.setAttribute('class', 'container');


let icon_icon__gihthub = document.createElement('span');
icon_icon__gihthub.setAttribute('class', 'Icon Icon--github');
icon_icon__gihthub.innerHTML += '';

let icon_icon__stackoverflow = document.createElement('span');
icon_icon__stackoverflow.setAttribute('class', 'Icon Icon--stackoverflow');
icon_icon__stackoverflow.innerHTML = '';

let icon_icon__html5 = document.createElement('span');
icon_icon__html5.setAttribute('class', 'Icon Icon--html5');
icon_icon__html5.innerHTML = '';



let help_on_stack_a = document.createElement('a');
help_on_stack_a.setAttribute('href', "https://stackoverflow.com/questions/tagged/html5boilerplate");


let view_the_showcase_a = document.createElement('a');
view_the_showcase_a.setAttribute('href', 'https://h5bp.net/');


let report_issues_a = document.createElement ('a');
report_issues_a.setAttribute('href', 'https://github.com/h5bp/html5-boilerplate/issues');


let report_issues_li = document.createElement('li');
let view_the_showcase_li = document.createElement('li');
let help_on_stack_li = document.createElement('li');



report_issues_li.appendChild(report_issues_a);
help_on_stack_li.appendChild(help_on_stack_a);
view_the_showcase_li.appendChild(view_the_showcase_a);



report_issues_a.appendChild(icon_icon__gihthub);
help_on_stack_a.appendChild(icon_icon__stackoverflow);
view_the_showcase_a.appendChild(icon_icon__html5);

help_on_stack_a.innerHTML += 'Help on Stack Overflow';
view_the_showcase_a.innerHTML += 'View the showcase';
report_issues_a.innerHTML += 'Report issues';

inline_block_list.appendChild(report_issues_li);
inline_block_list.appendChild(help_on_stack_li);
inline_block_list.appendChild(view_the_showcase_li);

container3.appendChild(inline_block_list);
aside.appendChild(container3);

///////////////
let footer = document.createElement('footer');

let footer_p1 = document.createElement('p');
let footer_p2 = document.createElement('p');
let footer_p3 = document.createElement('p');

let twitter_widget_1 = document.createElement('iframe');
twitter_widget_1.setAttribute('id', 'twitter-widget-1');
twitter_widget_1.setAttribute('class', 'twitter-share-button twitter-share-button-rendered');
twitter_widget_1.setAttribute('src', 'https://platform.twitter.com/widgets/tweet_button.96fd96193cc66c3e11d4c5e4c7c7ec97.en.html#dnt=false&id=twitter-widget-1&lang=en&original_referer=https%3A%2F%2Fhtml5boilerplate.com%2F&size=l&text=HTML5%20Boilerplate%3A%20The%20rock-solid%20professional%20front-end%20template&time=1601861573446&type=share&url=https%3A%2F%2Fhtml5boilerplate.com%2F&via=h5bp');

let twitter_widget_0 = document.createElement('iframe');
twitter_widget_0.setAttribute('id', 'twitter-fidget-0');
twitter_widget_0.setAttribute('class', 'twitter-follow-button twitter-follow-button-rendered');
twitter_widget_0.setAttribute('src', 'https://platform.twitter.com/widgets/follow_button.96fd96193cc66c3e11d4c5e4c7c7ec97.en.html#dnt=false&id=twitter-widget-0&lang=en&screen_name=h5bp&show_count=false&show_screen_name=true&size=l&time=1601861573436');

let footer_p2_a1 = document.createElement('a');
let footer_p2_a2 = document.createElement('a');
let footer_p2_a3 = document.createElement('a');

let footer_p3_a1 = document.createElement('a');
let footer_p3_a2 = document.createElement('a');
let footer_p3_a3 = document.createElement('a');
let footer_p3_a4 = document.createElement('a');
let footer_p3_a5 = document.createElement('a');
let footer_p3_a6 = document.createElement('a');

footer_p2_a1.setAttribute('href','https://github.com/h5bp');
footer_p2_a2.setAttribute('href','https://htmlcssjavascript.com/');
footer_p2_a3.setAttribute('href','https://github.com/coliff');

footer_p3_a1.setAttribute('href','https://mathiasbynens.be/');
footer_p3_a2.setAttribute('href','https://twitter.com/alrra');
footer_p3_a3.setAttribute('href','https://drublic.de/');
footer_p3_a4.setAttribute('href','http://nicolasgallagher.com/');
footer_p3_a5.setAttribute('href','https://www.paulirish.com/');
footer_p3_a6.setAttribute('href','http://nimbupani.com/');

footer_p2_a1.innerHTML += 'H5BP';
footer_p2_a2.innerHTML += 'Rob Larsen';
footer_p2_a3.innerHTML += 'Christian Oliff';

footer_p3_a1.innerHTML += 'Mathias Bynens';
footer_p3_a2.innerHTML += 'Cătălin Mariș';
footer_p3_a3.innerHTML += 'Hans Christian Reinl';
footer_p3_a4.innerHTML += 'Nicolas Gallagher';
footer_p3_a5.innerHTML += 'Paul Irish';
footer_p3_a6.innerHTML += 'Divya Manian';

footer_p1.appendChild(twitter_widget_1);
footer_p1.appendChild(twitter_widget_0);

footer_p2.innerHTML += 'A project from ';
footer_p2.appendChild(footer_p2_a1);;
footer_p2.innerHTML += ' currently maintenained by ';
footer_p2.appendChild(footer_p2_a2);
footer_p2.innerHTML += ' & ';
footer_p2.appendChild(footer_p2_a3);

footer_p3.innerHTML += 'This project wouldn\'t have been possible without ourpast team members: ';
footer_p3.appendChild(footer_p3_a1);
footer_p3.innerHTML += ',';
footer_p3.appendChild(footer_p3_a2);
footer_p3.innerHTML += ',';;
footer_p3.appendChild(footer_p3_a3);
footer_p3.innerHTML += ',';
footer_p3.appendChild(footer_p3_a4);
footer_p3.innerHTML += ',';
footer_p3.appendChild(footer_p3_a5);
footer_p3.innerHTML += ', and ';
footer_p3.appendChild(footer_p3_a6);
footer_p3.innerHTML += '.';



footer.appendChild(footer_p1);
footer.appendChild(footer_p2);
footer.appendChild(footer_p3);

body.appendChild(container);
body.appendChild(site_section);
body.appendChild(site_section_site_section_video);
body.appendChild(site_section2);
body.appendChild(aside);
body.appendChild(footer);
