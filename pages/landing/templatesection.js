import getConfig from 'next/config';
import { useEffect, useState } from 'react';

export default function TemplateSection() {
    const contextPath = getConfig().publicRuntimeConfig.contextPath;
    const [animationClass, setAnimationClass] = useState("");
    const [isActive, setActive] = useState(false);

    const handleClick = () => {
        setActive(!isActive);
    }

    useEffect(() => {
        setAnimationClass("animation");
    });

    return (
        <section id="template-section" className="landing-templates theme-dark py-8">
            <div className="section-header">Templates</div>
            <p className="section-detail">Professionally designed highly customizable application templates to get started in style.</p>
            <div className="flex justify-content-center mt-4">
                <a href="https://www.primefaces.org/store" className="font-semibold p-3 border-round flex align-items-center linkbox">
                    <span>Learn More</span>
                    <i className="pi pi-arrow-right ml-2"></i>
                </a>
            </div>
            <section className={`templates ${animationClass} flex justify-content-center align-items-center flex-column mt-7`}>
            <div className="flex">
                <div
                className="template-block block-1 mr-2 flex justify-content-center align-items-center"
                style={
                isActive
                ? {
                backgroundImage: `url("${contextPath}/images/landing-new/templates/diamond-light.jpeg")`
                }
                : {
                    backgroundImage: `url("${contextPath}/images/landing-new/templates/diamond-dark.jpeg")`
                }
                }
                >
                <a
                    className="templates-btn"
                    target="_blank"
                    href="https://www.primefaces.org/diamond-react/"
                    >
                Diamond Preview
                </a>
            </div>
            <div
            className="template-block block-2 ml-2 flex justify-content-center align-items-center"
            style={
            isActive
            ? {
                backgroundImage: `url("${contextPath}/images/landing-new/templates/freya-light.jpeg")`
            }
            : {
                backgroundImage: `url("${contextPath}/images/landing-new/templates/freya-dark.jpeg")`
            }
            }
            >
            <a
                className="templates-btn"
                target="_blank"
                href="https://www.primefaces.org/freya-react/"
                >
            Freya Preview
            </a>
            </div>
            </div>
            <div className="flex my-4">
                <div
                className="template-block block-3 mr-2 flex justify-content-center align-items-center"
                style={
                isActive
                ? {
                    backgroundImage: `url("${contextPath}/images/landing-new/templates/atlantis-light.jpeg")`
                }
                : {
                    backgroundImage: `url("${contextPath}/images/landing-new/templates/atlantis-dark.jpeg")`
                }
                }
                >
                <a
                    className="templates-btn"
                    target="_blank"
                    href="https://www.primefaces.org/atlantis-react/"
                    >
                Atlantis Preview
                </a>
            </div>
            <div className="template-block block-middle border-none box-shadow-none mr-2 flex justify-content-center align-items-center flex-column">
                {isActive ? (
                <div className="theme-mode mode-light flex justify-content-between align-items-center">
                    <div className="mode-active flex-1 px-3 flex align-items-center">
                        <svg
                            className="s1"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M10.0003 4.1665C9.83524 4.16435 9.67752 4.0978 9.56077 3.98106C9.44403 3.86431 9.37748 3.70659 9.37533 3.5415V2.2915C9.37533 2.12574 9.44117 1.96677 9.55838 1.84956C9.67559 1.73235 9.83457 1.6665 10.0003 1.6665C10.1661 1.6665 10.3251 1.73235 10.4423 1.84956C10.5595 1.96677 10.6253 2.12574 10.6253 2.2915V3.5415C10.6232 3.70659 10.5566 3.86431 10.4399 3.98106C10.3231 4.0978 10.1654 4.16435 10.0003 4.1665ZM10.0003 14.7915C9.05262 14.7915 8.1262 14.5105 7.33822 13.984C6.55023 13.4574 5.93607 12.7091 5.5734 11.8335C5.21073 10.958 5.11584 9.99452 5.30073 9.06503C5.48562 8.13554 5.94198 7.28174 6.6121 6.61162C7.28223 5.94149 8.13602 5.48513 9.06552 5.30024C9.99501 5.11535 10.9585 5.21024 11.834 5.57291C12.7096 5.93558 13.4579 6.54974 13.9844 7.33773C14.511 8.12571 14.792 9.05213 14.792 9.99984C14.7898 11.27 14.2842 12.4875 13.3861 13.3856C12.488 14.2838 11.2705 14.7893 10.0003 14.7915ZM10.0003 6.45817C9.29985 6.45817 8.6151 6.66588 8.03268 7.05505C7.45026 7.44421 6.99631 7.99734 6.72825 8.6445C6.46019 9.29165 6.39005 10.0038 6.52671 10.6908C6.66337 11.3778 7.00068 12.0089 7.49599 12.5042C7.9913 12.9995 8.62236 13.3368 9.30938 13.4734C9.9964 13.6101 10.7085 13.54 11.3557 13.2719C12.0028 13.0038 12.5559 12.5499 12.9451 11.9675C13.3343 11.3851 13.542 10.7003 13.542 9.99984C13.5398 9.0612 13.1659 8.16164 12.5022 7.49793C11.8385 6.83422 10.939 6.46037 10.0003 6.45817ZM9.56077 18.1477C9.67752 18.2645 9.83524 18.331 10.0003 18.3332C10.1654 18.331 10.3231 18.2645 10.4399 18.1477C10.5566 18.031 10.6232 17.8733 10.6253 17.7082V16.4582C10.6253 16.2924 10.5595 16.1334 10.4423 16.0162C10.3251 15.899 10.1661 15.8332 10.0003 15.8332C9.83457 15.8332 9.67559 15.899 9.55838 16.0162C9.44117 16.1334 9.37533 16.2924 9.37533 16.4582V17.7082C9.37748 17.8733 9.44403 18.031 9.56077 18.1477ZM17.7087 10.6248H16.4587C16.2929 10.6248 16.1339 10.559 16.0167 10.4418C15.8995 10.3246 15.8337 10.1656 15.8337 9.99984C15.8337 9.83408 15.8995 9.67511 16.0167 9.5579C16.1339 9.44069 16.2929 9.37484 16.4587 9.37484H17.7087C17.8744 9.37484 18.0334 9.44069 18.1506 9.5579C18.2678 9.67511 18.3337 9.83408 18.3337 9.99984C18.3337 10.1656 18.2678 10.3246 18.1506 10.4418C18.0334 10.559 17.8744 10.6248 17.7087 10.6248ZM2.29199 10.6248H3.54199C3.70775 10.6248 3.86672 10.559 3.98393 10.4418C4.10114 10.3246 4.16699 10.1656 4.16699 9.99984C4.16699 9.83408 4.10114 9.67511 3.98393 9.5579C3.86672 9.44069 3.70775 9.37484 3.54199 9.37484H2.29199C2.12623 9.37484 1.96726 9.44069 1.85005 9.5579C1.73284 9.67511 1.66699 9.83408 1.66699 9.99984C1.66699 10.1656 1.73284 10.3246 1.85005 10.4418C1.96726 10.559 2.12623 10.6248 2.29199 10.6248ZM5.41699 6.0415C5.25621 6.02921 5.10663 5.95442 5.00033 5.83317L4.09199 4.99984C4.03235 4.9402 3.98504 4.86939 3.95276 4.79146C3.92048 4.71354 3.90387 4.63002 3.90387 4.54567C3.90387 4.46132 3.92048 4.3778 3.95276 4.29988C3.98504 4.22195 4.03235 4.15115 4.09199 4.0915C4.15163 4.03186 4.22244 3.98455 4.30037 3.95227C4.37829 3.92 4.46181 3.90338 4.54616 3.90338C4.63051 3.90338 4.71403 3.92 4.79195 3.95227C4.86988 3.98455 4.94068 4.03186 5.00033 4.0915L5.83366 4.99984C5.93615 5.11443 5.99281 5.26277 5.99281 5.4165C5.99281 5.57024 5.93615 5.71858 5.83366 5.83317C5.72735 5.95442 5.57778 6.02921 5.41699 6.0415ZM15.2277 16.0444C15.3035 16.0759 15.3849 16.0919 15.467 16.0915C15.5509 16.0887 15.6334 16.0687 15.7093 16.0329C15.7853 15.9971 15.8531 15.9461 15.9087 15.8832C16.0257 15.766 16.0914 15.6071 16.0914 15.4415C16.0914 15.2759 16.0257 15.117 15.9087 14.9998L15.0003 14.1665C14.8837 14.1108 14.7527 14.0926 14.6253 14.1145C14.4979 14.1363 14.3804 14.1972 14.289 14.2885C14.1976 14.3799 14.1368 14.4974 14.115 14.6248C14.0931 14.7522 14.1113 14.8832 14.167 14.9998L15.0253 15.9082C15.083 15.9666 15.1518 16.0129 15.2277 16.0444ZM14.5837 6.0415C14.4229 6.02921 14.2733 5.95442 14.167 5.83317C14.0645 5.71858 14.0078 5.57024 14.0078 5.4165C14.0078 5.26277 14.0645 5.11443 14.167 4.99984L15.0003 4.0915C15.1208 3.97105 15.2841 3.90338 15.4545 3.90338C15.6248 3.90338 15.7882 3.97105 15.9087 4.0915C16.0291 4.21196 16.0968 4.37532 16.0968 4.54567C16.0968 4.71602 16.0291 4.87938 15.9087 4.99984L15.0003 5.83317C14.894 5.95442 14.7444 6.02921 14.5837 6.0415ZM4.29433 16.0444C4.37017 16.0759 4.45154 16.0919 4.53366 16.0915C4.61994 16.0953 4.70607 16.081 4.78646 16.0494C4.86686 16.0178 4.93972 15.9697 5.00032 15.9082L5.83366 14.9998C5.88936 14.8832 5.90753 14.7522 5.88568 14.6248C5.86382 14.4974 5.80301 14.3799 5.71162 14.2885C5.62023 14.1972 5.50275 14.1363 5.37537 14.1145C5.24798 14.0926 5.11695 14.1108 5.00032 14.1665L4.09199 15.0248C3.97495 15.142 3.90921 15.3009 3.90921 15.4665C3.90921 15.6321 3.97495 15.791 4.09199 15.9082C4.14969 15.9666 4.21849 16.0129 4.29433 16.0444Z"
                                fill="currentColor"
                                />
                        </svg>
                        <span className="ml-2">Light</span>
                    </div>
                    <svg
                        className="s2 flex-auto"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <path
                            d="M10.0751 17.2166C9.77139 17.2163 9.46801 17.1968 9.16676 17.1583C7.56244 16.9494 6.07225 16.2158 4.92825 15.0718C3.78425 13.9278 3.05067 12.4376 2.84176 10.8333C2.60048 9.02006 3.05274 7.18258 4.10804 5.68847C5.16334 4.19436 6.74387 3.1538 8.53342 2.77496C8.72962 2.73041 8.93458 2.74458 9.12278 2.81571C9.31097 2.88684 9.47408 3.01178 9.59176 3.17496C9.71235 3.34391 9.78059 3.54459 9.788 3.75203C9.79541 3.95947 9.74165 4.1645 9.63342 4.34162C9.12484 5.21427 8.93072 6.23487 9.08342 7.23329C9.22491 8.15063 9.65503 8.99903 10.3114 9.65536C10.9677 10.3117 11.8161 10.7418 12.7334 10.8833C13.7329 11.0412 14.7562 10.8436 15.6251 10.325C15.8038 10.2191 16.0097 10.1682 16.2172 10.1786C16.4247 10.189 16.6245 10.2602 16.7918 10.3833C16.9551 10.4989 17.0803 10.6604 17.1516 10.8474C17.2228 11.0344 17.2368 11.2383 17.1918 11.4333C16.8537 13.0698 15.9608 14.5392 14.6639 15.5931C13.3671 16.6469 11.7461 17.2204 10.0751 17.2166ZM8.33342 4.16662C7.32772 4.46217 6.41622 5.0143 5.68848 5.76874C4.96075 6.52319 4.44183 7.454 4.18271 8.4697C3.92359 9.48539 3.93319 10.551 4.21057 11.5619C4.48795 12.5728 5.02356 13.4941 5.76477 14.2353C6.50598 14.9765 7.42729 15.5121 8.43815 15.7895C9.44901 16.0669 10.5147 16.0765 11.5304 15.8173C12.5461 15.5582 13.4769 15.0393 14.2313 14.3116C14.9858 13.5838 15.5379 12.6723 15.8334 11.6666C15.0445 12.0513 14.1763 12.2456 13.2987 12.2342C12.4211 12.2227 11.5583 12.0057 10.7797 11.6006C10.001 11.1955 9.32818 10.6135 8.81508 9.90139C8.30198 9.18926 7.96292 8.36679 7.82509 7.49996C7.64969 6.36301 7.82711 5.19961 8.33342 4.16662Z"
                            fill="currentColor"
                            />
                    </svg>
                </div>
                ) : (
                <div className="theme-mode flex justify-content-between align-items-center">
                    <svg
                        className="s1 flex-auto"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M10.0003 4.1665C9.83524 4.16435 9.67752 4.0978 9.56077 3.98106C9.44403 3.86431 9.37748 3.70659 9.37533 3.5415V2.2915C9.37533 2.12574 9.44117 1.96677 9.55838 1.84956C9.67559 1.73235 9.83457 1.6665 10.0003 1.6665C10.1661 1.6665 10.3251 1.73235 10.4423 1.84956C10.5595 1.96677 10.6253 2.12574 10.6253 2.2915V3.5415C10.6232 3.70659 10.5566 3.86431 10.4399 3.98106C10.3231 4.0978 10.1654 4.16435 10.0003 4.1665ZM10.0003 14.7915C9.05262 14.7915 8.1262 14.5105 7.33822 13.984C6.55023 13.4574 5.93607 12.7091 5.5734 11.8335C5.21073 10.958 5.11584 9.99452 5.30073 9.06503C5.48562 8.13554 5.94198 7.28174 6.6121 6.61162C7.28223 5.94149 8.13602 5.48513 9.06552 5.30024C9.99501 5.11535 10.9585 5.21024 11.834 5.57291C12.7096 5.93558 13.4579 6.54974 13.9844 7.33773C14.511 8.12571 14.792 9.05213 14.792 9.99984C14.7898 11.27 14.2842 12.4875 13.3861 13.3856C12.488 14.2838 11.2705 14.7893 10.0003 14.7915ZM10.0003 6.45817C9.29985 6.45817 8.6151 6.66588 8.03268 7.05505C7.45026 7.44421 6.99631 7.99734 6.72825 8.6445C6.46019 9.29165 6.39005 10.0038 6.52671 10.6908C6.66337 11.3778 7.00068 12.0089 7.49599 12.5042C7.9913 12.9995 8.62236 13.3368 9.30938 13.4734C9.9964 13.6101 10.7085 13.54 11.3557 13.2719C12.0028 13.0038 12.5559 12.5499 12.9451 11.9675C13.3343 11.3851 13.542 10.7003 13.542 9.99984C13.5398 9.0612 13.1659 8.16164 12.5022 7.49793C11.8385 6.83422 10.939 6.46037 10.0003 6.45817ZM9.56077 18.1477C9.67752 18.2645 9.83524 18.331 10.0003 18.3332C10.1654 18.331 10.3231 18.2645 10.4399 18.1477C10.5566 18.031 10.6232 17.8733 10.6253 17.7082V16.4582C10.6253 16.2924 10.5595 16.1334 10.4423 16.0162C10.3251 15.899 10.1661 15.8332 10.0003 15.8332C9.83457 15.8332 9.67559 15.899 9.55838 16.0162C9.44117 16.1334 9.37533 16.2924 9.37533 16.4582V17.7082C9.37748 17.8733 9.44403 18.031 9.56077 18.1477ZM17.7087 10.6248H16.4587C16.2929 10.6248 16.1339 10.559 16.0167 10.4418C15.8995 10.3246 15.8337 10.1656 15.8337 9.99984C15.8337 9.83408 15.8995 9.67511 16.0167 9.5579C16.1339 9.44069 16.2929 9.37484 16.4587 9.37484H17.7087C17.8744 9.37484 18.0334 9.44069 18.1506 9.5579C18.2678 9.67511 18.3337 9.83408 18.3337 9.99984C18.3337 10.1656 18.2678 10.3246 18.1506 10.4418C18.0334 10.559 17.8744 10.6248 17.7087 10.6248ZM2.29199 10.6248H3.54199C3.70775 10.6248 3.86672 10.559 3.98393 10.4418C4.10114 10.3246 4.16699 10.1656 4.16699 9.99984C4.16699 9.83408 4.10114 9.67511 3.98393 9.5579C3.86672 9.44069 3.70775 9.37484 3.54199 9.37484H2.29199C2.12623 9.37484 1.96726 9.44069 1.85005 9.5579C1.73284 9.67511 1.66699 9.83408 1.66699 9.99984C1.66699 10.1656 1.73284 10.3246 1.85005 10.4418C1.96726 10.559 2.12623 10.6248 2.29199 10.6248ZM5.41699 6.0415C5.25621 6.02921 5.10663 5.95442 5.00033 5.83317L4.09199 4.99984C4.03235 4.9402 3.98504 4.86939 3.95276 4.79146C3.92048 4.71354 3.90387 4.63002 3.90387 4.54567C3.90387 4.46132 3.92048 4.3778 3.95276 4.29988C3.98504 4.22195 4.03235 4.15115 4.09199 4.0915C4.15163 4.03186 4.22244 3.98455 4.30037 3.95227C4.37829 3.92 4.46181 3.90338 4.54616 3.90338C4.63051 3.90338 4.71403 3.92 4.79195 3.95227C4.86988 3.98455 4.94068 4.03186 5.00033 4.0915L5.83366 4.99984C5.93615 5.11443 5.99281 5.26277 5.99281 5.4165C5.99281 5.57024 5.93615 5.71858 5.83366 5.83317C5.72735 5.95442 5.57778 6.02921 5.41699 6.0415ZM15.2277 16.0444C15.3035 16.0759 15.3849 16.0919 15.467 16.0915C15.5509 16.0887 15.6334 16.0687 15.7093 16.0329C15.7853 15.9971 15.8531 15.9461 15.9087 15.8832C16.0257 15.766 16.0914 15.6071 16.0914 15.4415C16.0914 15.2759 16.0257 15.117 15.9087 14.9998L15.0003 14.1665C14.8837 14.1108 14.7527 14.0926 14.6253 14.1145C14.4979 14.1363 14.3804 14.1972 14.289 14.2885C14.1976 14.3799 14.1368 14.4974 14.115 14.6248C14.0931 14.7522 14.1113 14.8832 14.167 14.9998L15.0253 15.9082C15.083 15.9666 15.1518 16.0129 15.2277 16.0444ZM14.5837 6.0415C14.4229 6.02921 14.2733 5.95442 14.167 5.83317C14.0645 5.71858 14.0078 5.57024 14.0078 5.4165C14.0078 5.26277 14.0645 5.11443 14.167 4.99984L15.0003 4.0915C15.1208 3.97105 15.2841 3.90338 15.4545 3.90338C15.6248 3.90338 15.7882 3.97105 15.9087 4.0915C16.0291 4.21196 16.0968 4.37532 16.0968 4.54567C16.0968 4.71602 16.0291 4.87938 15.9087 4.99984L15.0003 5.83317C14.894 5.95442 14.7444 6.02921 14.5837 6.0415ZM4.29433 16.0444C4.37017 16.0759 4.45154 16.0919 4.53366 16.0915C4.61994 16.0953 4.70607 16.081 4.78646 16.0494C4.86686 16.0178 4.93972 15.9697 5.00032 15.9082L5.83366 14.9998C5.88936 14.8832 5.90753 14.7522 5.88568 14.6248C5.86382 14.4974 5.80301 14.3799 5.71162 14.2885C5.62023 14.1972 5.50275 14.1363 5.37537 14.1145C5.24798 14.0926 5.11695 14.1108 5.00032 14.1665L4.09199 15.0248C3.97495 15.142 3.90921 15.3009 3.90921 15.4665C3.90921 15.6321 3.97495 15.791 4.09199 15.9082C4.14969 15.9666 4.21849 16.0129 4.29433 16.0444Z"
                            fill="currentColor"
                            />
                    </svg>
                    <div className="mode-active flex-1 px-3 flex align-items-center">
                        <svg
                            className="s2"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <path
                                d="M10.0751 17.2166C9.77139 17.2163 9.46801 17.1968 9.16676 17.1583C7.56244 16.9494 6.07225 16.2158 4.92825 15.0718C3.78425 13.9278 3.05067 12.4376 2.84176 10.8333C2.60048 9.02006 3.05274 7.18258 4.10804 5.68847C5.16334 4.19436 6.74387 3.1538 8.53342 2.77496C8.72962 2.73041 8.93458 2.74458 9.12278 2.81571C9.31097 2.88684 9.47408 3.01178 9.59176 3.17496C9.71235 3.34391 9.78059 3.54459 9.788 3.75203C9.79541 3.95947 9.74165 4.1645 9.63342 4.34162C9.12484 5.21427 8.93072 6.23487 9.08342 7.23329C9.22491 8.15063 9.65503 8.99903 10.3114 9.65536C10.9677 10.3117 11.8161 10.7418 12.7334 10.8833C13.7329 11.0412 14.7562 10.8436 15.6251 10.325C15.8038 10.2191 16.0097 10.1682 16.2172 10.1786C16.4247 10.189 16.6245 10.2602 16.7918 10.3833C16.9551 10.4989 17.0803 10.6604 17.1516 10.8474C17.2228 11.0344 17.2368 11.2383 17.1918 11.4333C16.8537 13.0698 15.9608 14.5392 14.6639 15.5931C13.3671 16.6469 11.7461 17.2204 10.0751 17.2166ZM8.33342 4.16662C7.32772 4.46217 6.41622 5.0143 5.68848 5.76874C4.96075 6.52319 4.44183 7.454 4.18271 8.4697C3.92359 9.48539 3.93319 10.551 4.21057 11.5619C4.48795 12.5728 5.02356 13.4941 5.76477 14.2353C6.50598 14.9765 7.42729 15.5121 8.43815 15.7895C9.44901 16.0669 10.5147 16.0765 11.5304 15.8173C12.5461 15.5582 13.4769 15.0393 14.2313 14.3116C14.9858 13.5838 15.5379 12.6723 15.8334 11.6666C15.0445 12.0513 14.1763 12.2456 13.2987 12.2342C12.4211 12.2227 11.5583 12.0057 10.7797 11.6006C10.001 11.1955 9.32818 10.6135 8.81508 9.90139C8.30198 9.18926 7.96292 8.36679 7.82509 7.49996C7.64969 6.36301 7.82711 5.19961 8.33342 4.16662Z"
                                fill="currentColor"
                                />
                        </svg>
                        <span className="ml-2">Dark</span>
                    </div>
                </div>
                )}
                <img className="img-1" src={isActive ? `${contextPath}/images/landing-new/templates/templates-text-light.png` : `${contextPath}/images/landing-new/templates/templates-text-dark.png`} height={110} />
            </div>
            <div className="template-block block-4 ml-2 flex justify-content-center align-items-center"
            style={
            isActive
            ? {
                backgroundImage: `url("${contextPath}/images/landing-new/templates/apollo-light.jpeg")`
            }
            : {
                backgroundImage: `url("${contextPath}/images/landing-new/templates/apollo-dark.jpeg")`
            }
            }
            >
            <a
                className="templates-btn"
                target="_blank"
                href="https://www.primefaces.org/apollo-react/"
                >
            Apollo Preview
            </a>
            </div>
            </div>
            <div className="flex">
                <div
                className="template-block block-5 mr-2 flex justify-content-center align-items-center"
                style={
                isActive
                ? {
                    backgroundImage: `url("${contextPath}/images/landing-new/templates/serenity-light.jpeg")`
                }
                : {
                    backgroundImage: `url("${contextPath}/images/landing-new/templates/serenity-dark.jpeg")`
                }
                }
                >
                <a
                    className="templates-btn"
                    target="_blank"
                    href="https://www.primefaces.org/serenity-react/"
                    >
                Serenity Preview
                </a>
            </div>
            <div
            className="template-block block-6 ml-2 flex justify-content-center align-items-center"
            style={
            isActive
            ? {
                backgroundImage: `url("${contextPath}/images/landing-new/templates/ultima-light.jpeg")`
            }
            : {
                backgroundImage: `url("${contextPath}/images/landing-new/templates/ultima-dark.jpeg")`
            }
            }
            >
            <a
                className="templates-btn"
                target="_blank"
                href="https://www.primefaces.org/ultima-react/"
                >
            Ultima Preview
            </a>
            </div>
            </div>
            <div className="lines">
                <div className="top">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className="left">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            </section>
            
        </section>
    );
}