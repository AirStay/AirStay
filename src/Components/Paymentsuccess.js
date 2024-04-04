import React, { useEffect, useState } from 'react';
import MyAccommodation from './MyAccomodation';
import { Link } from 'react-router-dom';

const Paymentsuccess = () => {
    useEffect(() => {
        const canvas = document.getElementById("canvas");
        const ctx = canvas.getContext("2d");

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        const confetti = [];
        const confettiCount = 300;
        const gravity = 0.5;
        const terminalVelocity = 5;
        const drag = 0.075;
        const colors = [
            { front: 'red', back: 'darkred' },
            { front: 'green', back: 'darkgreen' },
            { front: 'blue', back: 'darkblue' },
            { front: 'yellow', back: 'darkyellow' },
            { front: 'orange', back: 'darkorange' },
            { front: 'pink', back: 'darkpink' },
            { front: 'purple', back: 'darkpurple' },
            { front: 'turquoise', back: 'darkturquoise' }
        ];

        const randomRange = (min, max) => Math.random() * (max - min) + min;

        const initConfetti = () => {
            for (let i = 0; i < confettiCount; i++) {
                confetti.push({
                    color: colors[Math.floor(randomRange(0, colors.length))],
                    dimensions: {
                        x: randomRange(10, 20),
                        y: randomRange(10, 30)
                    },
                    position: {
                        x: randomRange(0, canvas.width),
                        y: canvas.height - 1
                    },
                    rotation: randomRange(0, 2 * Math.PI),
                    scale: {
                        x: 1,
                        y: 1
                    },
                    velocity: {
                        x: randomRange(-25, 25),
                        y: randomRange(0, -50)
                    }
                });
            }
        };

        const render = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            confetti.forEach((confetto, index) => {
                let width = confetto.dimensions.x * confetto.scale.x;
                let height = confetto.dimensions.y * confetto.scale.y;
                ctx.translate(confetto.position.x, confetto.position.y);
                ctx.rotate(confetto.rotation);
                confetto.velocity.x -= confetto.velocity.x * drag;
                confetto.velocity.y = Math.min(confetto.velocity.y + gravity, terminalVelocity);
                confetto.velocity.x += Math.random() > 0.5 ? Math.random() : -Math.random();
                confetto.position.x += confetto.velocity.x;
                confetto.position.y += confetto.velocity.y;
                if (confetto.position.y >= canvas.height) confetti.splice(index, 1);
                if (confetto.position.x > canvas.width) confetto.position.x = 0;
                if (confetto.position.x < 0) confetto.position.x = canvas.width;
                confetto.scale.y = Math.cos(confetto.position.y * 0.1);
                ctx.fillStyle = confetto.scale.y > 0 ? confetto.color.front : confetto.color.back;
                ctx.fillRect(-width / 2, -height / 2, width, height);
                ctx.setTransform(1, 0, 0, 1, 0, 0);
            });
            if (confetti.length <= 10) initConfetti();
            window.requestAnimationFrame(render);
        };

        resizeCanvas();
        initConfetti();
        render();
        window.addEventListener('resize', resizeCanvas);

        return () => {
            window.removeEventListener('resize', resizeCanvas);
        };
    }, []);

    const [showForm, setShowForm] = useState(false);

    const handleAddPlace = () => {
        setShowForm(true);
    };

    return (
        <div className="container d-flex justify-content-center align-items-center"style={{ minHeight: '80vh' }}>
            <div className="bg-white border border-dark rounded-lg p-4 text-center">
                <h1 className="text-2xl font-bold mb-4">Payment Successfully Completed!</h1>
                <p className="text-lg mb-4">Thank you for your payment.</p>
                <button className="btn btn-success m-2" onClick={handleAddPlace}>
                    <Link to="/profile"style={{color:'inherit',textDecoration:'none'}}>Go to My Booking</Link>
                </button>
            </div>
            {showForm && <MyAccommodation onClose={() => setShowForm(false)} />}
            <canvas id="canvas" style={{ position: 'fixed', top: '0', left: '0', zIndex: '-1', width: '100vw', height: '100vh' }}></canvas>
        </div>
    );
};

export default Paymentsuccess;
