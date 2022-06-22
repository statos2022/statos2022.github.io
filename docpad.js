module.exports = {

  prompts: false,

  port: 9978,
  // These are variables will be accessible via our templates
  templateData: {

    // Conference info
    conf: {
      name: "STATOS 2022",
      description: "Distributed Communication-constrained Learning",
      date: "28 August 2022",
      // If your event is free, just comment this line
      // price: "$100",
      venue: "Crowne Plaza",
      address: "10 Vladimira Popovića 11070",
      city: "Belgrade",
      state: "Serbia"
    },

    // The Call To Action button at the header,
    // If you don't want this, just remove the callToAction property.
    callToAction: {
        text: "Register now!",
        link: "https://www.eventbrite.de/e/371514318327"
    },

    // "Fork me on GitHub", if you don't want this, just remove the forkButton property
    // forkButton: {
    //    repository: "https://github.com/braziljs/conf-boilerplate"
    //},

    // Site info
    site: {
      theme: "yellow-swan",
      url: "https://statos2022.github.io/",
    // googleanalytics: "UA-33656081-1"
    },

    // Active sections on the website
    // to deactivate comment out with '//'
    // you can also change order here and it will reflect on page
    sections: [
      'about',
      //'location',
      'speakers',
      'schedule',
      //'sponsors',
      'partners',
      "pastworkshops"
      // 'contact'
    ],

    // Labels which you can translate to other languages
    labels: {
      about: "About",
      location: "Location",
      speakers: "Speakers",
      schedule: "Schedule",
      sponsors: "Sponsors",
      partners: "Organizers",
      pastworkshops: "Past Workhops",
      contact: "Contact"
    },
    // The entire schedule
    schedule: [
      {
        name: "Welcome and opening remarks",
        time: "1:30-2:00"
      },
      {
        name: "Alexander Jung",
        photo: "alexander_jung.jpeg",
        bio: 'Alexander Jung obtained a Ph.D. (with sub auspiciis) in 2012 from Technical University Vienna. After Post-Doc periods at TU Vienna and ETH Zurich,  he joined Aalto University as an Assistant Professor for Machine Learning in 2015. He leads the group “Machine Learning for Big Data” which studies explainable machine learning in network structured data. Alex first-authored a paper that won a Best Student Paper Award at IEEE ICASSP 2011. He received an AWS Machine  Learning Research Award and was the "Computer Science Teacher of the Year" at Aalto University in 2018. Currently he serves as an associate editor for the IEEE Signal Processing Letters and as the chair of the IEEE Finland Jt. Chapter on Signal Processing and Circuits and Systems. His textbook "Machine Learning: The Basics" has been published by Springer in 2022.',
        company: "Aalto",
        link: {
          href: "https://users.aalto.fi/~junga1/",
          text: "(Website)"
        },
        presentation: {
          title: "Networked Federated Learning",
          description: "Many important application domains generate distributed collections of  heterogeneous local datasets. These local datasets are related via an intrinsic network  structure that arises from domain-specific notions of similarity between local datasets.  Networked federated learning combines information in local data and their network  structure to learn accurate personalized models in a distributed fashion.  We formulate  networked federated learning as an instance of regularized empirical risk minimization  using generalized total variation (GTV) as a regularizer. This formulation unifies and considerably extends recent approaches to federated learning. We develop a duality between GTV minimization and network flow optimization. This duality proves useful both computationally and conceptually. The network flow picture lends naturally to precise conditions on the network structure and local models such that network optimization algorithms are successful. ",
          time: "2:00-2:50"
        }
      },

      {
        name: "Danijela Cabric",
        photo: "danijela_cabric.jpeg",
        bio: `Danijela Cabric is a Professor in the Electrical and Computer Engineering Department at the University of California, Los Angeles. She received M.S. from the University of California, Los Angeles in 2001 and Ph.D. from University of California, Berkeley in 2007, both in Electrical Engineering. In 2008, she joined UCLA as an Assistant Professor, where she heads Cognitive Reconfigurable Embedded Systems lab. Her current research projects include novel radio architectures, signal processing, communications, machine learning and networking techniques for spectrum sharing, 5G millimeter-wave, massive MIMO and IoT systems. She is a principal investigator in the three large cross-disciplinary multi-university centers including SRC/JUMP ComSenTer and CONIX, and NSF SpectrumX.
        <br/>
        Prof. Cabric was a recipient of the Samueli Fellowship in 2008, the Okawa Foundation Research Grant in 2009, Hellman Fellowship in 2012 and the National Science Foundation Faculty Early Career Development (CAREER) Award in 2012, and the Qualcomm Faculty Award in 2020 and 2021. She is serving as an Associate editor for several IEEE journals and on the IEEE Signal Processing for Communications and Networking Technical Committee. She was the General Chair of IEEE Vehicular Networking Conference (VNC) in 2019 and IEEE Dynamic Spectrum Access (DySPAN) in 2021, and a Distinguished Lecturer for IEEE Communications Society from 2018 to 2019. Prof. Cabric is an IEEE Fellow.
        `,
        company: "UCLA",
        link: {
          href: "https://www.ee.ucla.edu/danijela-cabric/",
          text: "(Website)"
        },
        presentation: {
          title: "UAV swarm enabled communications: System Design for Spectrum and Energy Efficiency with Security Considerations",
          description: `
          Multi-UAV deployments create new opportunities for wireless communications. By coordinating the UAVs, they can act as a virtual-antenna-array and use multi antenna communication schemes like distributed MIMO and distributed beamforming (BF). 
<br/>
Distributed MIMO enables a swarm of UAVs to transmit multiple data streams simultaneously to a multiantenna ground station (GS), thus improving the spectral efficiency. Due to the line-of-sight propagation between the swarm and the GS, the MIMO channel is highly correlated, leading to limited multiplexing gains. By optimizing the UAV positions, the swarm can attain the maximum capacity given by the single-user-bound. To achieve this capacity, we propose a centralized approach using block coordinate descent and distributed iterative approach using linear controllers. 
<br/>
Distributed BF can extend the communication range of a remotely deployed swarm, avoiding energy waste in travel towards the destination radio. In order to beamform, the UAVs typically rely on the destination feedback, however, noisy feedback degrades the BF gains. To limit the degradation, we developed an analytical framework to predict the BF gains at a given SNR and used it to optimize the signaling with the destination. The proposed framework was verified experimentally in the lab and using UAV-mounted software-defined-radios (SDR). We also developed a feedback-free BF approach that eliminates the need for destination feedback entirely in a LOS channel. In this approach, one BF radio acts as a guide and moves to point the beam of the remaining radios towards the destination. This approach tolerates localization error and was demonstrated using SDRs.
<br/>
As for the security considerations, they apply beyond UAVs to any wireless device. Security considerations include radio authentication and interpreting unauthorized signals. For device authentication, we leveraged the radios' RF fingerprint extracted using deep learning and formulated an open set classification problem to reject signals from unauthorized transmitters. We compared several approaches   and studied the training dataset impact on performance. To blindly decode unauthorized signals, we proposed the dual path network (DPN) combining digital signal processing and deep learning for modulation classification and blind symbol decoding. DPN design yields interpretable outputs and by jointly estimating the unknown parameters, it improves the modulation classification accuracy.        `,
          time: "3:00-3:50"
        }
      },

      {
        name: "Coffee break",
        time: "3:50-4:30"
      },

      {
        name: "Stefan Vlaski",
        photo: "stefan_vlaski.jpeg",
        bio: 'Stefan Vlaski is Lecturer in the Communications and Signal Processing Group within the Department of Electrical and Electronic Engineering at Imperial College London, where he conducts research at the intersection of machine learning, network science and optimisation with applications in signal processing and communications. He received the B.Sc. degree in Electrical Engineering from Technical University Darmstadt, Germany, in 2013, and M.S as well as Ph.D. degrees in Electrical and Computer Engineering from the University of California, Los Angeles, USA, in 2014 and 2019, respectively. From 2019 to 2021 he was Postdoctoral Researcher with the Adaptive Systems Laboratory at École Polytechnique Fédérale de Lausanne (EPFL) in Switzerland. He was recipient of the German National Scholarship at TU Darmstadt and the Graduate Division Fellowship at UCLA. His papers have been recognized at Best Student Paper contests at IEEE ICASSP 2016 and IEEE CAMSAP 2019, and his research has led to patents which have been assigned to UCLA and Amazon.',
        company: "Imperial",
        link: {
          href: "https://www.imperial.ac.uk/people/s.vlaski",
          text: "(Website)"
        },
        presentation: {
          title: "Provable and Efficient Learning over Networks",
          description: `Rapid increases in the availability of data and computational resources have led to a paradigm shift in many areas of engineering and beyond. While in the past, the design and operation of engineering systems have been based on carefully crafted (physical) models, an abundance of data and processing capabilities has allowed them to be replaced by data-driven solutions, where the modelling step itself is delegated to the machine. Such underdetermined learning tasks frequently give rise to highly non-convex optimisation problems. Such problems can be NP-hard in the worst case, yet the practical success of gradient-based algorithms in many applications (such as back-propagation for deep learning) suggest that an important subset of non-convex optimisation problems can be solved both efficiently and reliably. Analytical guarantees of this kind have appeared only recently.
          <br/>
          At the same time, the democratisation of technology has caused both data and computational resources to be accessible at dispersed and heterogeneous locations, rather than powerful centralised processing centers. Data is generated and processed on our mobile devices, in sensors scattered throughout “smart cities” and “smart grids”, and vehicles on the road. Central aggregation of raw data is frequently neither efficient nor feasible, due to concerns around communication constraints, privacy, and robustness to link and node failure. The purpose of decentralised optimisation and learning is then to devise intelligent, data-driven, engineering systems by means of decentralised processing and peer-to-peer interactions, while preserving the strong performance guarantees of centralised architectures and yet ensuring communication efficiency, privacy and robustness. This talk will review recent results on the development and analysis of learning algorithms over networks and the associated performance trade-offs. `,
          time: "4:30-5:20"
        }
      },

      {
        name: "Yonina Eldar",
        photo: "yonina_eldar.jpeg",
        bio: `TBA`,
        company: "Weizman Inst.",
        link: {
          href: "https://www.weizmann.ac.il/math/yonina/",
          text: "(Website)"
        },
        presentation: {
          title: "TBA",
          description: `TBA`,
          time: "5:30-6:20"
        }
      },
    ],

    // List of Sponsors
    sponsors: [
      //{
      //  name: "Eventick",
      //  logo: "themes/yellow-swan/img/sponsor.png",
      //  url: "http://eventick.com.br"
      //}
    ],

    // List of Partners
    partners: [
      {
        name: "IPC Lab@Imperial",
        logo: "ipc_lab.png",
        url: "https://www.imperial.ac.uk/information-processing-and-communications-lab"
      }
    ],

    // Theme path
    getTheme: function() {
      return "themes/" + this.site.theme;
    },

    // Site Path
    getUrl: function() {
    	return this.site.url;
    }
  }
};