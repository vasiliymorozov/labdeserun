NOTIFICATION_BACKENDS = {
    'default': 'notifications.backends.email.EmailBackend',
}

NOTIFICATION_CONFIG = {
    'default': {
        'email': {
            'from_email': 'your_email@example.com',
            'from_name': 'Your Name',
        },
    },
}
