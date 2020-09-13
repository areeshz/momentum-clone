const getGreeting = (time) => {
    let hour = parseInt(time.substring(0, time.length - 6))

    if (time.substring(time.length - 2) === 'PM' && hour !== 12) hour += 12

    if (time.substring(time.length - 2) === 'AM') {
        return 'Good Morning,'
    } else if (hour >= 12 && hour < 17) {
        return 'Good Afternoon,'
    } else if (hour >= 17 && hour <= 23) {
        return 'Good Evening,'
    } else {
        return 'Welcome,'
    }
}

export default getGreeting