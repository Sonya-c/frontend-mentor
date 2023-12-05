tailwind.config = {
    theme: {
        extend: {
            colors: {
                LightRed: 'hsl(0, 100%, 67%)',
                OrangeyYellow: 'hsl(39, 100%, 56%)',
                GreenTeal: 'hsl(166, 100%, 37%)',
                CobaltBlue: 'hsl(234, 85%, 45%)',
                LightSlateBlue: 'hsl(252, 100%, 67%)',
                LightRoyalBlue: 'hsl(241, 81%, 54%)',
                VioletBlue: 'hsla(256, 72%, 46%, 1)',
                PersianBlue: 'hsla(241, 72%, 46%, 0)',
                White: 'hsl(0, 0%, 100%)',
                PaleBlue: 'hsl(221, 100%, 96%)',
                LightLavender: 'hsl(241, 100%, 89%)',
                DarkGrayBlue: 'hsl(224, 30%, 27%)'
            },
            fontFamily: {
                sans: ['Hanken Grotesk', 'sans-serif'],
            },
            screens: {
                sm: '375px',
                xl: '1440px',
            },
        }
    }
}

const categoryResults = ({ category, score, icon, color }) => {
    return `<div class="category flex w-full justify-between p-3 rounded-lg bg-${color}/[.10]" id='category_${category} items-center '>
        <div class="flex gap-3 justify-center items-center ">
            <img src='${icon}'>
            <span class="text-${color} font-bold ">${category}</span>
        </div>
        <div class="self-center ">
            <strong class="text-DarkGrayBlue ">${score}</strong> / <span class="text-DarkGrayBlue font-light ">100</span>
        </div>
    </div>`
}

$(document).ready(() => {
    $.getJSON("data.json", (data) => {
        data.map((item) => {
            $("#category_results").append(
                categoryResults({
                    category: item.category,
                    score: item.score,
                    icon: item.icon,
                    color: item.color
                })
            );
        });
    });
}); 