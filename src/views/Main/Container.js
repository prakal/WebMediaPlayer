import React from 'react'

import CLAudioPlayer from 'react-cl-audio-player';
import styles2 from '../../styles/musicPlayer.css'
import 'font-awesome/css/font-awesome.css'
import styles from '../../styles.module.css'

// import classNames from 'classnames'

// import 'http://ajax.googleapis.com/ajax/libs/jqueryui/1.11.2/themes/smoothness/jquery-ui.css'
export class Container extends React.Component {
  render() {
    var songs = [
		  {
		    url: 'http://101songs.com/fileDownload/Songs/128/2026.mp3',
		    cover: 'http://www.nossoarmario.com/blog/wp-content/uploads/2015/01/redfoo.jpg',
		    artist: {
		      name: 'Student of the Year - Hindi',
		      song: 'Ishq Wala Love'
		    }
		  },
		  {
		    url: 'http://mymp3singer.net/files/download/id/110',
		    cover: 'http://mp3mad.net/image/28489/Fakira%20Sational-Dj%20Vabs.jpg',
		    artist: {
		      name: 'Hindi',
		      song: 'Fakeera'
		    }
		  },
		  {
		    url: 'http://claymore.france.free.fr/momo/summer love.mp3',
		    cover: 'http://myuvn.com/wp-content/uploads/2015/07/justin-timberlake-pusher-love-girl.jpg',
		    artist: {
		      name: 'Justin Timberlake',
		      song: 'Summer Love'
		    }
		  },
		  {
		    url: 'http://a.tumblr.com/tumblr_mlyactVSyX1qejx3lo1.mp3',
		    cover: 'http://www.tenhomaisdiscosqueamigos.com/wp-content/uploads/2015/06/daft-punk.jpg',
		    artist: {
		      name: 'Daft Punk',
		      song: 'Get Lucky'
		    }
		  },
		  {
		    url: 'http://a.tumblr.com/tumblr_lxe7hpIUPA1r3ne4ro1.mp3',
		    artist: {
		      name: 'Michael Buble',
		      song: 'Feeling Good'
		    }
		  },
		  {
		    url: 'http://dl.tak3da.com/download/1394/03/The Weeknd - Can t Feel My Face [320].mp3',
		    cover: 'http://www.clickgratis.com.br/fotos-imagens/the-weekend/aHR0cDovL3d3dy5iaWxsYm9hcmQuY29tL2ZpbGVzL3N0eWxlcy9wcm9tb182NTAvcHVibGljL21lZGlhL3RoZS13ZWVrZW5kLXRoZS1oaWxscy12aWRlby1iaWxsYm9hcmQtNjUwLmpwZw==.jpg',
		    artist: {
		      name: 'The Weekend',
		      song: 'Can\'t Feel My Face'
		    }
		  },
		  {
		    url: 'http://midnightoilco.net/sitebuildercontent/sitebuilderfiles/metallicafuel.mp3',
		    cover: 'http://imagens.ailhadometal.com/2015/03/Metallica3.png',
		    artist: {
		      name: 'Metallica',
		      song: 'Fuel'
		    }
		  }
		];
	// var muteClasses = classNames(styles2.fa, styles2.fa-volume-up);

		return (<h1 className={styles.wrapper}> 
					<div> Some text here {__NODE_ENV__}</div> 

					<CLAudioPlayer
		          		songs={songs}
		        	/>

				</h1>)
  }
}

export default Container