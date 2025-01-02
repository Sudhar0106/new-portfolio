import React, { useState } from 'react'
import {
    CustomModal,
    CNMoadlContent,
    CNMoadlText,
    CNMoadlHeader,
    CNMoadlTitle
} from '@/components/ui/modal';


function Task() {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    return (
        <section>
            <button className='bg-pink-600 rounded-full px-6 py-2' onClick={toggle}>button</button>
            <CustomModal open={modal} className='md:min-w-[80vw] lg:min-w-[60vw]'>
                <CNMoadlHeader toggle={toggle}>
                    <CNMoadlTitle>Are you absolutely sure</CNMoadlTitle>
                    <CNMoadlText>Edit your FAQ here.</CNMoadlText>
                </CNMoadlHeader>
                <CNMoadlContent>
                    <article className="md:gap-8 md:grid md:grid-cols-3">
                        <div>
                            <div className="flex items-center mb-6">
                                <img className="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt="" />
                                <div className="ms-4 font-medium dark:text-white">
                                    <p>Jese Leos</p>
                                </div>
                            </div>
                            <ul className="space-y-4 text-sm text-gray-500">
                                <li className="flex items-center"><svg className="w-3 h-3 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 15V9m4 6V9m4 6V9m4 6V9M2 16h16M1 19h18M2 7v1h16V7l-8-6-8 6Z" />
                                </svg>Apartament with city view</li>
                                <li className="flex items-center"><svg className="w-3 h-3 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                </svg>3 nights December 2021</li>
                                <li className="flex items-center"><svg className="w-3 h-3 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 19">
                                    <path d="M14.5 0A3.987 3.987 0 0 0 11 2.1a4.977 4.977 0 0 1 3.9 5.858A3.989 3.989 0 0 0 14.5 0ZM9 13h2a4 4 0 0 1 4 4v2H5v-2a4 4 0 0 1 4-4Z" />
                                    <path d="M5 19h10v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2ZM5 7a5.008 5.008 0 0 1 4-4.9 3.988 3.988 0 1 0-3.9 5.859A4.974 4.974 0 0 1 5 7Zm5 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm5-1h-.424a5.016 5.016 0 0 1-1.942 2.232A6.007 6.007 0 0 1 17 17h2a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5ZM5.424 9H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h2a6.007 6.007 0 0 1 4.366-5.768A5.016 5.016 0 0 1 5.424 9Z" />
                                </svg>Family</li>
                            </ul>
                        </div>
                        <div className="col-span-2 mt-6 md:mt-0 text-white">
                            <div className="flex items-start mb-5">
                                <div className="pe-4">
                                    <footer>
                                        <p className="mb-2 text-sm text-gray-500">Reviewed: <time datetime="2022-01-20 19:00">January 20, 2022</time></p>
                                    </footer>
                                    <h4 className="text-xl font-bold">Spotless, good appliances, excellent layout, host was genuinely nice and helpful.</h4>
                                </div>
                            </div>
                            <p className="mb-2 opacity-60">The flat was spotless, very comfortable, and the host was amazing. I highly recommend this accommodation for anyone visiting New York city centre. It's quite a while since we are no longer using hotel facilities but self contained places. And the main reason is poor cleanliness and staff not being trained properly. This place exceeded our expectation and will return for sure.</p>
                            <p className="mb-2 opacity-60">The flat was spotless, very comfortable, and the host was amazing. I highly recommend this accommodation for anyone visiting New York city centre. It's quite a while since we are no longer using hotel facilities but self contained places. And the main reason is poor cleanliness and staff not being trained properly. This place exceeded our expectation and will return for sure.</p>
                            <p className="mb-5 opacity-60">It is obviously not the same build quality as those very expensive watches. But that is like comparing a Citroën to a Ferrari. This watch was well under £100! An absolute bargain.</p>
                            <aside className="flex items-center mt-3">
                                <a href="#" className="inline-flex items-center text-sm font-medium text-pink-500 hover:underline dark:text-pink-400">
                                    Helpful
                                </a>
                                <a href="#" className="inline-flex items-center text-sm font-medium text-pink-500 hover:underline dark:text-pink-400 group ms-5">
                                    Not helpful
                                </a>
                            </aside>
                        </div>
                    </article>
                </CNMoadlContent>
            </CustomModal>
            
        </section>
    )
}

export default Task