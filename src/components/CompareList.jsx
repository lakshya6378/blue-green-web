import React from 'react'
import Section from './Section'
import Heading from './Heading'

const CompareList = () => {
  return (
    <Section>
      <div className='container'>
        <Heading title="Compare plans & features" />
        <div className="-mx-5 px-5 overflow-auto">
          <table className="table-fixed w-full min-w-[32rem]">
            <tbody>
              <tr className="h6">
                <td className="w-[35%] py-4 pr-10">Features</td>
                <td className="p-4 text-center text-color-2">Basic</td>
                <td className="p-4 text-center text-color-1">Premium</td>
                <td className="p-4 text-center text-color-3">Enterprise</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Section>
  );
}

export default CompareList