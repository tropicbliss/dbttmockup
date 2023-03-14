import Image from "next/image";
import summary from "../../public/summary.jpg";
import beforefall from "../../public/beforefall.jpg";
import afterfall from "../../public/afterfall.jpg";
import { InformationCircleIcon } from "@heroicons/react/20/solid";

export default function About() {
  return (
    <>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <p className="text-base font-semibold leading-7 text-indigo-600">
              We think differently
            </p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Eldertechnovators are the future of eldercare
            </h1>
            <div className="mt-10 grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-gray-700 lg:max-w-none lg:grid-cols-2">
              <div>
                <p>
                  We utilise technologies such as IoT to make the lives of
                  caretakers easier and elders safer. We provide a highly
                  customisable package that includes a fall detector, a
                  dashboard, and a caretakers&apos; checklist perfect for
                  eldercare homes.
                </p>
                <p className="mt-8">
                  And the best of all? Our technologies are tightly integrated
                  with each other. For example, if the fall detector detects a
                  fall, but is not totally certain that this occurred, it will
                  appear in the top of our caretakers&apos; checklist which will
                  prompt the caretakers to look into the incident.
                </p>
              </div>
              <div>
                <p>
                  Our pricing plan is highly affordable and government
                  subsidised, such that even the least well-off eldercare home
                  can use our services and products.
                </p>
                <p className="mt-8">
                  And the best of all? You don&apos;t even need to worry about
                  it. When one of our product breaks, simply contact us and we
                  will replace your products as soon as possible.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden pt-16 lg:pt-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <Image
              className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-gray-900/10"
              src={summary}
              alt=""
              placeholder="blur"
            />
            <div className="relative" aria-hidden="true">
              <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-white pt-[7%]" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
          <div className="mt-10 max-w-2xl">
            <h2 className="mt-16 text-4xl font-bold tracking-tight text-gray-900">
              Fall detection
            </h2>
            <p className="mt-6">
              Falls are a significant health risk for older adults, and can lead
              to serious injuries and other health complications. Here are some
              of the dangers of falls to older people:
            </p>
            <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
              <li className="flex gap-x-3">
                <span>
                  <strong className="font-semibold text-gray-900">
                    Fractures.
                  </strong>{" "}
                  Falls can cause fractures or broken bones, particularly in the
                  hip, spine, wrist, and ankle. These injuries can be painful
                  and may require surgery and a long period of recovery.
                </span>
              </li>
              <li className="flex gap-x-3">
                <span>
                  <strong className="font-semibold text-gray-900">
                    Traumatic brain injury.
                  </strong>{" "}
                  Falls can also cause head injuries, including traumatic brain
                  injury (TBI). Older adults are particularly susceptible to TBI
                  because their brains may have already experienced some
                  age-related decline.
                </span>
              </li>
              <li className="flex gap-x-3">
                <span>
                  <strong className="font-semibold text-gray-900">
                    Fear of falling.
                  </strong>{" "}
                  After a fall, older adults may become afraid of falling again.
                  This fear can limit their activities and lead to social
                  isolation, which can further impact their overall health and
                  well-being.
                </span>
              </li>
              <li className="flex gap-x-3">
                <span>
                  <strong className="font-semibold text-gray-900">
                    Loss of independence.
                  </strong>{" "}
                  A serious fall can lead to a loss of independence for older
                  adults, particularly if they require assistance with daily
                  activities or are unable to live independently.
                </span>
              </li>
              <li className="flex gap-x-3">
                <span>
                  <strong className="font-semibold text-gray-900">
                    Death.
                  </strong>{" "}
                  Falls can be fatal, particularly in older adults who may have
                  other health issues that make recovery more difficult.
                  According to the World Health Organization, falls are the
                  second leading cause of accidental death worldwide.
                </span>
              </li>
            </ul>
            <p className="mt-8 text-xl leading-8">
              Falls unfortunately do happen, and when falls happen every second
              they are on the ground counts. Given the health concerns resulting
              from falls, monitoring falls is paramount to their safety.{" "}
              <span className="font-bold">
                Every fall caught is a life saved.
              </span>
            </p>
            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
              Before the fall
            </h2>
            <p className="mt-6">
              When there are no falls, every room is highlighted green. The
              dashboard also shows the monthly trend for falls over time.
            </p>
            <figure className="mt-8">
              <Image
                className="rounded-xl bg-gray-50 object-cover"
                src={beforefall}
                alt="Dashboard, before the fall"
                placeholder="blur"
              />
              <figcaption className="mt-4 flex gap-x-2 text-sm leading-6 text-gray-500">
                <InformationCircleIcon
                  className="mt-0.5 h-5 w-5 flex-none text-gray-300"
                  aria-hidden="true"
                />
                Dashboard, before the fall.
              </figcaption>
            </figure>
            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
              During the fall
            </h2>
            <p className="mt-6">
              When there is a fall detected, the dashboard will immediately
              alert the caretakers to the location that the fall is detected,
              and shows the location of that particular room on the map for easy
              navigation.
            </p>
            <figure className="mt-8">
              <Image
                className="rounded-xl bg-gray-50 object-cover"
                src={afterfall}
                alt="Dashboard, during the fall"
                placeholder="blur"
              />
              <figcaption className="mt-4 flex gap-x-2 text-sm leading-6 text-gray-500">
                <InformationCircleIcon
                  className="mt-0.5 h-5 w-5 flex-none text-gray-300"
                  aria-hidden="true"
                />
                Dashboard, during the fall.
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
      <div className="bg-white px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
          <div className="mt-10 max-w-2xl">
            <h2 className="mt-16 text-4xl font-bold tracking-tight text-gray-900">
              Checklist
            </h2>
            <p className="m-6">
              Caretakers make mistakes. A specialised checklist for caretakers
              help remind them of tasks such as administering medicine at
              certain times.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
