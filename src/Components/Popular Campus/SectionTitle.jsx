/* eslint-disable react/prop-types */

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="mx-auto text-center md:w-6/12 my-3 md:my-8">
            <p className="text-[#47b2f1] mb-2">*** {subHeading} *** </p>
            <h3 className=" text-xl md:text-3xl uppercase border-[#47b2f1] border-y-4 py-4">{heading}</h3>
        </div>
    );
};

export default SectionTitle;