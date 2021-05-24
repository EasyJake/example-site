export const initialState = {
    currentUser: {
        name: 'Guest',
        inbox: [
            {
                _id: 1,
                subject: 'Welcome!',
                content: 'Welcome to this demo of a project from the Full Stack extended program! Congratulations on completing the introductory course!',
                from: 'HackerUSA',
                sent: new Date,
                isRead: false
            },
            {
                _id: 2,
                subject: 'An Urgent Message',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
                from: 'HackerUSA',
                sent: new Date,
                isRead: false
            },
            {
                _id: 3,
                subject: 'Straight Spam',
                content: 'Don\'t event open it',
                from: 'Spamsalot',
                sent: new Date,
                isRead: false
            },
            {
                _id: 4,
                subject: 'Some Social Media Updates',
                content: 'That you probably already saw',
                from: 'Facebook',
                sent: new Date,
                isRead: false
            },
            {
                _id: 5,
                subject: 'Your dependencies are out of date',
                content: 'And we know you don\'t care ',
                from: 'GitHub',
                sent: new Date,
                isRead: false
            },
            {
                _id: 6,
                subject: 'Weekly Apple News Update',
                content: 'Things are mostly getting worse but at least we have a streaming service now for some reason',
                from: 'Apple',
                sent: new Date,
                isRead: false
            },
            {
                _id: 7,
                subject: 'Your order is on it\'s way!',
                content: 'Thank you for placing your 1,316,033,406th order',
                from: 'Amazon',
                sent: new Date,
                isRead: false
            }
        ]

    },
    composeModalOpen: false,
    selectedMessageIds: []
}