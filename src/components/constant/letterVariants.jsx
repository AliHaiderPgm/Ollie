export const letterVariants = {
    hidden: { y: '150%' },
    show: i => ({
        y: 0,
        transition: {
            delay: i * 0.07,
            duration: 0.7,
            ease: 'easeInOut',
        }
    })
}