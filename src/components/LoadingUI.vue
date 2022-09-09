<template>
    <div class="card1">
        <div class="loaderr">
            <div class="scanner">
                <h1>Loading...</h1>
            </div>
        </div>
    </div>
</template>

<style>
.card1 {
    text-align: center;
    width: 100%;
    height: 100%;
    background: #272f2f;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
    border-radius: 10px;
}

.scanner h1 {
    color: transparent;
    font-size: 1.4rem;
    position: relative;
    overflow: hidden;
    cursor: pointer;
}

.scanner h1::before {
    content: "Loading...";
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    border-right: 4px solid #17FEFF;
    overflow: hidden;
    color: #17FEFF;
    animation: load91371 3s linear infinite;
}

@keyframes load91371 {

    0%,
    10%,
    100% {
        width: 0;
    }

    10%,
    20%,
    30%,
    40%,
    50%,
    60%,
    70%,
    80%,
    90%,
    100% {
        border-right-color: transparent;
    }

    11%,
    21%,
    31%,
    41%,
    51%,
    61%,
    71%,
    81%,
    91% {
        border-right-color: #17FEFF;
    }

    60%,
    80% {
        width: 100%;
    }
}
</style>

