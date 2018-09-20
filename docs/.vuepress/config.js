module.exports = {
    title: 'xx Blog!',
    description: 'desc...',
    themeConfig: {
        sidebar: {
            '/': [
                {
                    title: '简介',
                    collapsable: false,
                    children: [
                        ''
                    ]
                },
                {
                    title: 'node',
                    collapsable: false,
                    children: [
                        '/node/text1'
                    ]
                }
            ]
        }
    }
}